const { checkTitleCreate, checkContentCreate } = require('./actions/createPost');
const { checkTitleEdit, checkContentEdit } = require('./actions/editPost');

exports.validate = (type) => {
  switch (type) {
    case 'create': {
      return [checkTitleCreate(), checkContentCreate()]
    }
    case 'update': {
      return [checkTitleEdit(), checkContentEdit()]
    }
  }
}