const { checkNameCreate } = require('./actions/category/createCategory');
const { checkNameEdit } = require('./actions/category/editCategory');

exports.validate = (type) => {
  switch (type) {
  case 'create': {
    return [checkNameCreate()];
  }
  case 'update': {
    return [checkNameEdit()];
  }
  }
};
