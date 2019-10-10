'use strict';

const User    = require('../../models/user');
const { validationResult }          = require('express-validator');
const { userManagerByAdmin }        = require('../../services/userService');
const { customMessageValidate }     = require('../../support/helpers');
const { encryptPassword, makeSalt } = require('../../services/authService');

exports.index = async (req, res) => {
  try {
    let users = await userManagerByAdmin(req);

    return res.status(200).json(users);
  } catch (err) {

    return res.status(500).json(err);
  }
};

exports.detail = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    return res.status(200).json(user);
  } catch (err) {

    return res.status(500).json(err);
  }
};

exports.store = async (req, res) => {
  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }
  const { email, password, username } = req.body;
  let user = await User.find({ email });

  if (user.length) {

    return res.status(422).json({ msg: 'The user already exists.' });
  }
  try {
    let salt = makeSalt();
    let passwordHash = encryptPassword(password, salt);

    let params = {
      email: email,
       password_hash: passwordHash
       , username:username,
        salt: salt
    }
    let userCreate = new User(params);
    userCreate.save();

    return res.status(200).json({ data: { user } });
  } catch (err) {

    return res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }

  try {
    const { username, avatar } = req.body;
    await User.findByIdAndUpdate(req.params.id, { $set: { username, avatar } });

    return res.status(200).json({ msg: 'update success!' });
  } catch (err) {
    return res.status(500).json(err);
  }
};

