const { check } = require('express-validator');

let checkTitleEdit = () => {
  return check('title')
    .not()
    .isEmpty()
    .withMessage('title not empty.');
};

let checkContentEdit = () => {
  return check('content')
  .not()
  .isEmpty()
  .withMessage('contents not empty.');
};

module.exports = {
  checkTitleEdit,
  checkContentEdit
};