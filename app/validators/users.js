const { checkUserName, checkPassword, checkEmail } = require('./actions/register');
const { checkCurrentPassword, checkNewPassword, checkConfirmPassword } = require('./actions/changePassword');
const { checkUserNameEdit } = require('./actions/profile');

exports.validate = (type) => {
  switch (type) {
    case 'register': {
      return [checkUserName(), checkPassword(), checkEmail()]
    }

    case 'changePassword': {
      return [checkCurrentPassword(), checkNewPassword(), checkConfirmPassword()];
    }

    case 'update': {
      return [checkUserNameEdit()]
    }
  }
}