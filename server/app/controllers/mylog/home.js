
const homeService = require('../../services/myblog/homeService');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');

exports.index = async (req, res, next) => {
  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }

  try {
    const listPost = await homeService.getListPost(req);

    return res.status(200).json(listPost);
  } catch (err) {

    return next(err);
  }
};
