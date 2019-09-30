const { check } = require('express-validator');

let checkPage = () => {

  return check('page')
    .isInt({ gt: -1 })
    .withMessage('page must be number > 0.');
};

module.exports = {
  checkPage
};