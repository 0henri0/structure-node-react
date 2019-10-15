const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const Category = mongoose.model('Category');
const Tag = mongoose.model('Tag');
const pagination = require('../../../config/pagination');
const { getDomain } = require('../../support/helpers');

exports.getInitialData = async (req) => {
  try {
    const perPageInitial = pagination.PER_PAGE_HOME_INITIAL;
    const tagInitials = await Tag.find({}).limit(perPageInitial);

    const postInitials = await Post.find({}).limit(perPageInitial);
    postInitials.forEach(post => {
      post.image_title = getDomain(req) + post.image_title;
    });

    const categoriesInitial = await Category.find({}).limit(perPageInitial);
    categoriesInitial.forEach(category => {
      category['image'] = getDomain(req) + category['image'];
    });

    return {
      categoriesInitial, postInitials, tagInitials
    }

  } catch (err) {
    throw new Error(err);
  }
};

exports.getListPost = async (req) => {
  try {
    const perPage = pagination.PER_PAGE_HOME;
    const perPageInitial = pagination.PER_PAGE_HOME_INITIAL;
    const page = parseInt(req.query.page) ? parseInt(req.query.page) : 0;

    const posts = await Post.find({}).limit(perPage).skip(perPage * page + perPageInitial);
    posts.forEach(post => {
      return post.image_title = getDomain(req) + post.image_title;
    });

    return {
      posts
    };
  } catch (err) {
    throw new Error(err);
  }
};