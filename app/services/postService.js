const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const pagination = require('../../config/pagination');
const { getDomain } = require('../support/helpers');

exports.postHome = async (req) => {
  try {
    let perPage   = pagination.PER_PAGE_HOME;
    let page      = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    let count     = await Post.count();
    let postHome  = await Post.find({}).limit(perPage).skip(perPage * page);
    postHome.forEach(post => {
      return post.image_title = getDomain(req) + post.image_title
    });

    return {
      page,
      perPage,
      count,
      postHome
    };
  } catch (err) {

    throw new Error(err);
  }
};

exports.postManagerByAdmin = async (req) => {
  try {
    let perPage   = pagination.PER_PAGE_ADMIN;
    let page      = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    let count     = await Post.count();
    let data  = await Post.find({}).limit(perPage).skip(perPage * page);

    data.forEach(post => {
      post['image_title'] = getDomain(req) + post['image_title']
    });

    return {
      page,
      perPage,
      count,
      data
    };
  } catch (err) {

    throw new Error(err);
  }
};