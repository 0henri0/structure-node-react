const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const pagination = require('../../../config/pagination');
const { getDomain } = require('../../support/helpers');

exports.getListCategories = async (req) => {
  try {
    const perPage = pagination.PER_PAGE_ADMIN;
    const page = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    const count = await Category.countDocuments();
    const data = await Category.find({}).limit(perPage).skip(perPage * page);

    data.forEach(category => {
      category['image'] = getDomain(req) + category['image'];
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
