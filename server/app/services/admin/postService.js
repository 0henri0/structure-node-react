const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const pagination = require('../../../config/pagination');
const { getDomain } = require('../../support/helpers');
const fs = require('fs');

exports.getListPost = async (req) => {
  try {
    const perPage = pagination.PER_PAGE_ADMIN;
    const page = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    const count = await Post.countDocuments();
    const data = await Post
                        .find({})
                        .populate({ path: 'category', select: 'name' })
                        .populate({ path: 'user', select: 'username' })
                        .limit(perPage).skip(perPage * page);

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

exports.updatePost = async (req) => {
  try {
    let post = await Post.findById(req.params.id);
    let pathOld = post.image_title;

    let pathNew = req.file.path.replace('public/', '');

    if (pathOld) {
      fs.unlink('public/' + pathOld, function(){
        // do somethings
      });
    }

    await post.update({ $set: {...req.body, image_title: pathNew}});
    post.save();

    return {
      post
    };
  } catch (error) {
    fs.unlink(req.file.path, function(){
      // do somethings
    });

    throw new Error(error);
  }
};