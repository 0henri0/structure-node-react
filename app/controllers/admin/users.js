'use strict';
const User = require('../../models/user');

exports.index = async function (req, res) {
  let users = await User.find({})
  res.status(200).json(users);
}

exports.detail = async function (req, res) {
  let user = await User.findById(req.params.id);
  res.status(200).json(user)
}

exports.store = async function (req, res) {

  const { username, email, password } = req.body;
  let user = await User.find({ email });

  if (!user) {
    res.status(422).json({ msg: 'The user already exists.' })
  }
  user = new User({ username, email, password });
  user.save();
  return res.status(200).json({ data: { user } })
}

exports.update = async function (req, res) {

  const { username, avatar } = req.body;
  console.log({ username, avatar });
  await User.findByIdAndUpdate(req.params.id, { $set: { username, avatar } });

  return res.status(200).json({ data: { user } })
}