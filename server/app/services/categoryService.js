const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const pagination = require('../../config/pagination');
const { getDomain } = require('../support/helpers');

exports.categoryManagerByAdmin = async (req) => {
  try {
    let perPage   = pagination.PER_PAGE_ADMIN;
    let page      = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    let count     = await Category.count();
    let data      = await Category.find({}).limit(perPage).skip(perPage * page);

    data.forEach(category => {
      category['image'] = getDomain(req) + category['image']
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
