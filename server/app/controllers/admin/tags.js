'use strict';

const Tag = require('../../models/tag');
const { validationResult } = require('express-validator');
const { customMessageValidate } = require('../../support/helpers');

exports.index = async function (req, res) {
  try {
    let tags = await Tag.find({});

    return res.status(200).json(tags);
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
    let tag = new Tag(req.body);
    tag.save();

    return res.status(200).json({ data: { tag } });
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
    let { name } = req.body;
    await Tag.findByIdAndUpdate(req.params.id, { $set: { name } });

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


