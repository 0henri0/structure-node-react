const { check } = require('express-validator');

let checkNameCreate = () => {
  return check('name')
    .not()
    .isEmpty()
    .withMessage('category not empty!');
};

module.exports = {
  checkNameCreate
};