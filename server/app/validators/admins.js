const { checkPassword, checkEmail } = require('./actions/admin/register');

exports.validate = (type) => {
  switch (type) {
  case 'register': {
    return [checkPassword(), checkEmail()];
  }
  }
};
