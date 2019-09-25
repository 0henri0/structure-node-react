const { check } = require('express-validator');
const mongoose = require('mongoose');
const User = mongoose.model('User');

let checkUserName = () => {
  return check('username')
    .not()
    .isEmpty()
    .withMessage('username must be required.')
    .isLength({ min: 3, max: 20 })
    .withMessage('min 3 max 20.')
}

let checkEmail = () => {
  return check('email')
    .not()
    .isEmpty()
    .withMessage('email must be required.')
    .isLength({ min: 3, max: 20 })
    .withMessage('min 3 max 20.')
    .isEmail()
    .withMessage('email not support.')
    .custom(async (value) => {
      let user = await User.find({ email: value });

      if (user.length) {
        throw new Error('email_already_exist');
      }
    })
}

let checkPassword = () => {
  return check('password')
    .not()
    .isEmpty()
    .withMessage('password must be required')
    .isLength({ min: 6, max: 20 })
    .withMessage('password length must be min 6 max 20.')
}

module.exports = {
  checkUserName,
  checkEmail,
  checkPassword
}