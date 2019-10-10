const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constants = require('../../config/constants');

const UserSchema = Schema(
  {
    username: {
      type: String,
      default: '',
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    rule: {
      type: Number,
      required: true,
      default: constants.USER_RULE_MEMBER,
    },
    password_hash: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: 'img/imagegallary/1.jpg',
    },
    deleted_at: {
      default: '',
      type: Date,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);