const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    refresh_token: [{ type: String, default: '' }]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Admin', AdminSchema);
