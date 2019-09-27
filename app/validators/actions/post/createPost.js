const { check } = require('express-validator');

let checkTitleCreate = () => {
  return check('title')
    .not()
    .isEmpty()
    .withMessage('title not empty.');
};

let checkContentCreate = () => {
  return check('content')
  .not()
  .isEmpty()
  .withMessage('contents not empty.');
};

module.exports = {
  checkTitleCreate,
  checkContentCreate
};