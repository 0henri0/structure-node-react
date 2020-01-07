'use strict';

const Post = require('../../models/post');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');
const { getListPost, updatePost } = require('../../services/admin/postService');
const logInfo = require('../../logger/logInfo');
const logError = require('../../logger/logError');

exports.index = async (req, res) => {
  try {
    const posts = await getListPost(req);

    return res.status(200).json(posts);
  } catch (err) {
    //write Log Error
    logError.error(err);

    return res.status(500).json(err);
  }
};

exports.detail = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    return res.status(200).json(post);
  } catch (err) {
    //write Log Error
    logError.error(err);

    return res.status(500).json(err);
  }
};

exports.store = async (req, res) => {
  // write Log
  logInfo.info(req);

  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }
  let path = req.file.path;
  path = path.replace('public', '');
  const post = new Post({...req.body, image_title: path});
  post.save();

  return res.status(200).json({ data: { post } });
};

exports.update = async (req, res) => {
  // write Log
  logInfo.info(req);

  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }

  try {
    const params = req.body;
    const { post } = await updatePost(req);

    return res.status(200).json({ data: params, msg: 'update success!' });
  } catch (err) {
    //write Log Error
    logError.error(err);

    return res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    return res.status(200).json({ data: post, msg: 'delete success!' });
  } catch (err) {
    //write Log Error
    logError.error(err);

    return res.status(500).json(err);
  }
};
