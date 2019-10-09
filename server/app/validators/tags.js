const { checkNameCreate } = require('./actions/tag/createTag');
const { checkNameEdit } = require('./actions/tag/editTag');

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