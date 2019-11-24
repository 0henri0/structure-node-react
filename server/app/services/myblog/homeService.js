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

    const postPopularInitials = await Post.find({}).limit(4).select(['image_title', 'title', 'updatedAt']);
    postPopularInitials.forEach(post => {
      post.image_title = getDomain(req) + post.image_title;
    });

    const postInitials = await Post.find({}).limit(perPageInitial).select(['image_title', 'title', 'content', 'updatedAt']);
    postInitials.forEach(post => {
      post.image_title = getDomain(req) + post.image_title;
    });

    const categoriesInitial = await Category.find({}).limit(perPageInitial);
    categoriesInitial.forEach(category => {
      category['image'] = getDomain(req) + category['image'];
    });

    return {
      categoriesInitial, postInitials, tagInitials, postPopularInitials
    }

  } catch (err) {
    throw new Error(err);
  }
};

