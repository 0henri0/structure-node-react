const { check } = require('express-validator');

let checkNameCreate = () => {
  return check('name')
    .not()
    .isEmpty()
    .withMessage('tag not empty!');
};

module.exports = {
  checkNameCreate
};
