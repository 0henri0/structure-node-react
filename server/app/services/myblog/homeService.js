const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const pagination = require('../../../config/pagination');
const { getDomain } = require('../../support/helpers');

exports.getListPost = async (req) => {
  try {
    const perPage   = pagination.PER_PAGE_HOME;
    const page      = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    const count     = await Post.count();
    const listPost  = await Post.find({}).limit(perPage).skip(perPage * page);
    listPost.forEach(post => {
      return post.image_title = getDomain(req) + post.image_title;
    });

    return {
      page,
      perPage,
      count,
      listPost
    };
  } catch (err) {

    throw new Error(err);
  }
};