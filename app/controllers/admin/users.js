'use strict';
const User = require('../../models/user');
const { validationResult } = require('express-validator/check');
const { customMessageValidate } = require('../../support/helpers');

exports.index = async function (req, res) {
  let users = await User.find({})

  return res.status(200).json(users);
}

exports.detail = async function (req, res) {
  let user = await User.findById(req.params.id);

  return res.status(200).json(user)
}

exports.store = async function (req, res) {
  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }
  const { email } = req.body;
  let user = await User.find({ email });

  if (user.length) {

    return res.status(422).json({ msg: 'The user already exists.' })
  }
  user = new User(req.body);
  user.save();

  return res.status(200).json({ data: { user } })
}

exports.update = async function (req, res) {

  const { username, avatar } = req.body;
  console.log({ username, avatar });
  await User.findByIdAndUpdate(req.params.id, { $set: { username, avatar } });

  return res.status(200).json({ data: { user } })
}

