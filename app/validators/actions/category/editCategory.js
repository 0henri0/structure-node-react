const { check } = require('express-validator');

let checkNameEdit = () => {
  return check('name')
    .not()
    .isEmpty()
    .withMessage('category not empty!');
};

module.exports = {
  checkNameEdit
};