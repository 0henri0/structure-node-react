'use strict';

const Post = require('../../models/post');
const { getDomain } = require('../../support/helpers');
const postService = require('../../services/myblog/postService');
const logError = require('../../logger/logError');

exports.detail = async function (req, res) {
  try {
    const post = await Post.findById(req.params.id);
    post.image_title = getDomain(req) + post.image_title;

    return res.status(200).json(post);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
};

exports.lastestPosts = async function(req, res) {
  try {
    const posts = await postService.getListPost(req);

    return res.status(200).json(posts);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
}

exports.popularPosts = async function(req, res) {
  try {
    const posts = await postService.getListPopularPost(req);

    return res.status(200).json(posts);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
}

exports.postComment = async function(req, res) {
  try {
    let comment = {
      userId: req.signedCookies.userInfo._id,
      body: req.body.body
    };

    let post = await Post.findById(req.params.idPost);
    post.comments.push({...comment});
    post.save();

    return res.status(200).json(post.comments);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
}

exports.postRate = async function(req, res) {
  try {

    let rate = {
      userId: req.signedCookies.userInfo._id,
      rate: req.body.rate
    };

    let post = await Post.findById(req.params.idPost);
    post.rates.push({...rate});
    post.save();

    return res.status(200).json(post.rates);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
}