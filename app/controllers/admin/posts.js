'use strict';

const Post = require('../../models/post');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');

exports.index = async function (req, res) {
  try {
    let users = await Post.find({})

    return res.status(200).json(users);
  } catch (err) {

    return res.status(500).json(err);
  }
}

exports.detail = async function (req, res) {
  try {
    let post = await Post.findById(req.params.id);

    return res.status(200).json(post)
  } catch (err) {

    return res.status(500).json(err)
  }

}

exports.store = async function (req, res) {
  const errors = validationResult(req);

  if (errors.array().length) {

    return res.status(422).json(customMessageValidate(errors));
  }

  let post = new Post(req.body);
  post.save();

  return res.status(200).json({ data: { post } })
}

exports.update = async function (req, res) {
  try {
    let params = req.body;
    await Post.findByIdAndUpdate(req.params.id, { $set: params });

    return res.status(200).json({ data: params });
  } catch (err) {
    return res.status(500).json(err);
  }

}

