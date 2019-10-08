const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = async function (req, res, next) {
  const { email, password } = req.body;

  let user = User.find({ email });


}

exports.jwtMiddlewave = (req, res, next) => {
  console.log(this);
}

exports.jwtMiddlewave2 = function (req, res, next) {
  console.log(this);
}