
const homeService = require('../../services/myblog/homeService');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');

exports.index = async (req, res) => {
  try {
    const listPost = await homeService.getListPostInitial(req);
    const listCategories = await homeService.getListCategories(req);

    return res.status(200).json({ listPost, listCategories });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err)
  }
};
