const mongoose = require('mongoose');
const Tag = mongoose.model('Tag');
const COUNT_RIGHT_SIDERBAR_TAGS = 10;

exports.getTagsRightSiderBar = async (req) => {
  try {
      tags = await Tag.find({}).limit(COUNT_RIGHT_SIDERBAR_TAGS).select(['name'])

    return {
      tags
    };
  } catch (err) {
    throw new Error(err);
  }
};

