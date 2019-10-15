const { checkTitleCreate, checkContentCreate } = require('./actions/post/createPost');
const { checkTitleEdit, checkContentEdit } = require('./actions/post/editPost');

exports.validate = (type) => {
  switch (type) {
    case 'create': {
      return [checkTitleCreate(), checkContentCreate()];
    }
    case 'update': {
      return [checkTitleEdit(), checkContentEdit()];
    }
  }
};
