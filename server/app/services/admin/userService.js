const mongoose = require('mongoose');
const User = mongoose.model('User');
const pagination = require('../../../config/pagination');
const { getDomain } = require('../../support/helpers');

exports.getUsers = async (req) => {
  try {
    const perPage = pagination.PER_PAGE_ADMIN;
    const page = parseInt(req.query.page) ? parseInt(req.query.page) : 0;
    const count = await User.count();
    const data = await User.find({}).limit(perPage).skip(perPage * page);

    data.forEach(user => {
      user['avatar'] = getDomain(req) + user['avatar'];
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
