const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Tag', TagSchema);