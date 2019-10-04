const { check } = require('express-validator');

let checkNameEdit = () => {
  return check('name')
    .not()
    .isEmpty()
    .withMessage('tag not empty!');
};

module.exports = {
  checkNameEdit
};