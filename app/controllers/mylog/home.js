
const postService = require('../../services/postService');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');

exports.index = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }

  try {
    let postHome = await postService.postHome(req);

    return res.status(200).json(postHome);
  } catch (err) {

    return next(err);
  }
};
