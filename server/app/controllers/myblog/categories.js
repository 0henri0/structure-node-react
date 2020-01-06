'use strict';

const categoryService = require('../../services/myblog/categoryService');
const logError = require('../../logger/logError');

exports.categoriesRightSiderBar = async function(req, res) {
  try {
    const posts = await categoryService.getCategoriesRightSiderBar(req);

    return res.status(200).json(posts);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
}
