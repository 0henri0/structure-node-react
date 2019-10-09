'use strict';

const Post = require('../../models/post');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');
const { postManagerByAdmin } = require('../../services/postService');
exports.index = async (req, res) => {
  try {
    let posts = await postManagerByAdmin(req);

    return res.status(200).json(posts);
  } catch (err) {

    return res.status(500).json(err);
  }
};

exports.detail = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    return res.status(200).json(post);
  } catch (err) {

    return res.status(500).json(err);
  }
};

exports.store = async (req, res) => {
  const errors = validationResult(req);

  if (errors.array().length) {

    return res.status(422).json(customMessageValidate(errors));
  }

  let post = new Post(req.body);
  post.save();

  return res.status(200).json({ data: { post } });
};

exports.update = async (req, res) => {
  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }

  try {
    let params = req.body;
    await Post.findByIdAndUpdate(req.params.id, { $set: params });

    return res.status(200).json({ data: params, msg: 'update success!' });
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    let post = await Post.findByIdAndDelete(req.params.id);

    return res.status(200).json({ data: post, msg: 'delete success!' });
  } catch (err) {
    return res.status(500).json(err);
  }
};

