const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema(
  {
    title: {
      type: String,
      default: '',
      required: true,
    },
    content: {
      type: String,
      required: true,
      unique: true,
    },
    rule: {
      type: Number,
      required: true,
      default: 0,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    deleted_at: {
      default: '',
      type: Date,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', PostSchema);