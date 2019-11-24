const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const COUNT_RIGHT_SIDERBAR_CATEGORIES = 4;

exports.getCategoriesRightSiderBar = async (req) => {
  try {
      categories = await Category.find({}).limit(COUNT_RIGHT_SIDERBAR_CATEGORIES).select(['name'])

    return {
      categories
    };
  } catch (err) {
    throw new Error(err);
  }
};

