
const homeService = require('../../services/myblog/homeService');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');
const logError = require('../../logger/logError');

exports.index = async (req, res) => {
  try {
    const initinalData = await homeService.getInitialData(req);

    return res.status(200).json(initinalData);
  } catch (err) {
    //write Log
    logError.error(err);

    return res.status(500).json(err);
  }
};

exports.getPost = async (req, res) => {
  try {
    const posts = await homeService.getListPost(req);

    return res.status(200).json(posts);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
};
