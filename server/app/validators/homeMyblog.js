const { checkPage } = require('./actions/homeBlog/checkPage');

exports.validator = (type) => {
  switch (type) {
  case 'index': {
    return [checkPage()];
  }
  }
};