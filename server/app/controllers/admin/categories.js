'use strict';

const Category = require('../../models/category');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');
const { getListCategories } = require('../../services/admin/categoryService');

exports.index = async (req, res) => {
  try {
    const categories = await getListCategories(req);

    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.store = async (req, res) => {
  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }

  try {
    const category = new Category(req.body);
    category.save();

    return res.status(200).json({ data: { category } });
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
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

exports.delete = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    return res.status(200).json({ data: category, msg: 'delete success!' });
  } catch (err) {
    return res.status(500).json(err);
  }
};
