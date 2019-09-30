const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const pagination = require('../../config/pagination');
const { getDomain } = require('../support/helpers');

exports.postHome = async (req) => {
  try {
    let perPage   = pagination.PER_PAGE;
    let page      = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    let count     = await Post.count();
    let postHome  = await Post.find({}).limit(perPage).skip(perPage * page);
    console.log(req.headers.host);
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