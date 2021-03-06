'use strict';

const User    = require('../../models/user');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');
const { encryptPassword, makeSalt } = require('../../services/myblog/authService');
const logInfo = require('../../logger/logInfo');
const logError = require('../../logger/logError');

/**
 * Show detail a user.
 * @param {obj} req
 * @param {obj} res
 */
exports.detail = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    return res.status(200).json(user);
  } catch (err) {
    //write Log Error
    logError.error(err);

    return res.status(500).json(err);
  }
};

/**
 * Create a user.
 * @param {obj} req
 * @param {obj} res
 */
exports.store = async (req, res) => {
  // write Log
  logInfo.info(req);

  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }
  const { email, password, username } = req.body;
  const user = await User.find({ email });

  if (user.length) {

    return res.status(422).json({ msg: 'The user already exists.' });
  }
  try {
    const salt = makeSalt();
    const passwordHash = encryptPassword(password, salt);

    const params = {
      email: email,
      password_hash: passwordHash
      , username:username,
      salt: salt
    };
    const userCreate = new User(params);
    userCreate.save();

    return res.status(200).json({ data: { user } });
  } catch (err) {
    //write Log Error
    logError.error(err);

    return res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  // write Log
  logInfo.info(req);

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
