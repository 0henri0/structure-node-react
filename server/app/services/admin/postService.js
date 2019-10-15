const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const pagination = require('../../../config/pagination');
const { getDomain } = require('../../support/helpers');

exports.getListPost = async (req) => {
  try {
    const perPage = pagination.PER_PAGE_ADMIN;
    const page = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    const count = await Post.countDocuments();
    const data = await Post.find({}).limit(perPage).skip(perPage * page);

    data.forEach(post => {
      post['image_title'] = getDomain(req) + post['image_title'];
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
