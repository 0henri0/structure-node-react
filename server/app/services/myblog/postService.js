const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const Category = mongoose.model('Category');
const Tag = mongoose.model('Tag');
const pagination = require('../../../config/pagination');
const { getDomain } = require('../../support/helpers');
const COUNT_POPULAR_POST = 4;

exports.getInitialData = async (req) => {
  try {
    const perPageInitial = pagination.PER_PAGE_HOME_INITIAL;
    const tagInitials = await Tag.find({}).limit(perPageInitial);

    const postInitials = await Post.find({}).limit(perPageInitial);
    postInitials.forEach(post => {
      if (post['image_title']) {
        post['image_title'] = getDomain(req) + post['image_title'];
      }
    });

    const categoriesInitial = await Category.find({}).limit(perPageInitial);
    categoriesInitial.forEach(category => {
      if (category['image']) {
        category['image'] = getDomain(req) + category['image'];
      }
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
    var perPage;
    var posts;
    var page = (parseInt(req.query.page) && parseInt(req.query.page) > 0) ? parseInt(req.query.page) : 0;

    if (page === 0) {
      perPage = pagination.PER_PAGE_POST_INITIAL;
      posts = await Post.find({}).limit(perPage).select(['image_title', 'title', 'content', 'updatedAt']);
    } else {
      perPage = pagination.PER_PAGE_POST;
      page = page -1 ;
      posts = await Post.find({}).limit(perPage).skip(perPage * page + pagination.PER_PAGE_POST_INITIAL).select(['image_title', 'title', 'content', 'updatedAt']);
    }

    posts.forEach(post => {
      if (post['image_title']) {
        return post['image_title'] = getDomain(req) + post['image_title'];
      }
    });

    return {
      posts
    };
  } catch (err) {
    throw new Error(err);
  }
};

exports.getListPopularPost = async (req) => {
  try {
    const popularPosts = await Post.find({}).sort({ view: 'desc' }).limit(COUNT_POPULAR_POST).select(['image_title', 'title', 'view', 'updatedAt']);

    popularPosts.forEach(popularPost => {
      popularPost['image_title'] = getDomain(req) + popularPost['image_title'];
    });

    return {
      posts: popularPosts
    }
  } catch (err) {
    throw new Error(err);
  }
}
