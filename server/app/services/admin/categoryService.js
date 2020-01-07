const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const pagination = require('../../../config/pagination');
const { getDomain } = require('../../support/helpers');
const fs = require('fs');

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

exports.updateCategory = async (req) => {
  try {
    let category = await Category.findById(req.params.id);
    let pathOld = category.image;
    let pathNew = req.file.path.replace('public', '');

    if (pathOld) {
      fs.unlink('public/' + pathOld, function(){
        // do somethings
      });
    }

    category.name = req.body.name;
    category.image = pathNew;
    category.save();

    return {
      category
    };
  } catch (error) {
    fs.unlink(req.file.path, function(){
      // do somethings
    });

    throw new Error(error);
  }
};


exports.getListCategoriesAll = async (req) => {
  try {
    const categories = await Category.find({});

    categories.forEach(category => {
      category['image'] = getDomain(req) + category['image'];
    });

    return {
      categories
    };
  } catch (err) {
    throw new Error(err);
  }
};
