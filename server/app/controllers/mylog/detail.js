'use strict';

const Post = require('../../models/post');
const { getDomain } = require('../../support/helpers');

exports.index = async function (req, res) {
  try {
    const post = await Post.findById(req.params.id);
    post.image_title = getDomain(req) + post.image_title;

    return res.status(200).json(post);
  } catch (err) {

    return res.status(500).json(err);
  }
};