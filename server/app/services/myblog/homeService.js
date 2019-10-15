const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const Category = mongoose.model('Category');
const pagination = require('../../../config/pagination');
const { getDomain } = require('../../support/helpers');

exports.getListPostInitial = async (req) => {
  try {
    const perPage = pagination.PER_PAGE_HOME;
    console.log(perPage);
    const page = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    const data = await Post.find({}).limit(perPage).skip(perPage * page);
    data.forEach(post => {
      return post.image_title = getDomain(req) + post.image_title;
    });

    return {
      page,
      perPage,
      data
    };
  } catch (err) {
    throw new Error(err);
  }
};

exports.getListCategories = async (req) => {
  try {
    const data = await Category.find({});
    data.forEach(category => {
      category['image'] = getDomain(req) + category['image'];
    });

    return {
      data
    };
  } catch (err) {
    throw new Error(err);
  }
};