'use strict';

const Tag = require('../../models/tag');
const tagService = require('../../services/myblog/tagService');
const logError = require('../../logger/logError');

exports.tagsRightSiderBar = async function(req, res) {
  try {
    const tags = await tagService.getTagsRightSiderBar(req);

    return res.status(200).json(tags);
  } catch (err) {
    //write Log error
    logError.error(err);

    return res.status(500).json(err);
  }
}
