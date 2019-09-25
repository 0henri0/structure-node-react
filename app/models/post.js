const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentPost = Schema(
  {
    body: {
      type: String,
      required: true
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    deletedAt: {
      type: Date,
    }
  },
  {
    timestamps: true
  }
)

const RatePost = Schema(
  {
    rate: {
      type: Number,
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    }
  }
)

const PostSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    comments: [CommentPost],
    rates: [RatePost],
    tags: [
      {
        type: Schema.ObjectId,
        ref: 'Tag'
      }
    ],
    category: {
      type: Schema.ObjectId,
      ref: 'Category'
    },
    deletedAt: {
      type: Date,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', PostSchema);