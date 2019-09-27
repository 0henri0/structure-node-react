'use strict';

const Category = require('../../models/category');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');

exports.index = async function (req, res) {
  try {
    let categories = await Category.find({});

    return res.status(200).json(categories);
  } catch (err) {

    return res.status(500).json(err);
  }
};

exports.store = async function (req, res) {
  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }

  try {
    let category = new Category(req.body);
    category.save();

    return res.status(200).json({ data: { category } });
  } catch (err) {

    return res.status(500).json(err);
  }
};

exports.update = async function (req, res) {
  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }

  try {
    const { name } = req.body;
    await Category.findByIdAndUpdate(req.params.id, { $set: { name } });

    return res.status(200).json({ msg: 'update success!' });
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.delete = async function (req, res) {
  try {

    return res.status(200).json({ msg: 'delete success!' });
  } catch (err) {
    return res.status(500).json(err);
  }
};


