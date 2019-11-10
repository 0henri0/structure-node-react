const mongoose = require('mongoose');
const Tag = mongoose.model('Tag');
const pagination = require('../../../config/pagination');

exports.getTags = async (req) => {
  try {
    const perPage = pagination.PER_PAGE_ADMIN;
    const page = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    const count = await Tag.countDocuments();
    const data = await Tag.find({}).limit(perPage).skip(perPage * page);

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
