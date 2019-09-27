const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const pagination = require('../../config/pagination');

exports.postHome = async (req) => {
  try {
    let perPage = pagination.PER_PAGE;
    let page = req.params.id ? req.params.id : 0;
    let count = await Post.count();
    let postHome = await Post.find({}).limit(perPage).skip(perPage * page);
    return {
      count,
      postHome,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
}