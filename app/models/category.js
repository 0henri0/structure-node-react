const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: 'img/imagegallary/1.jpg'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Category', CategorySchema);