const { checkUserName, checkPassword, checkEmail } = require('./actions/user/register');
const { checkCurrentPassword, checkNewPassword, checkConfirmPassword } = require('./actions/user/changePassword');
const { checkUserNameEdit } = require('./actions/user/profile');

exports.validate = (type) => {
  switch (type) {
  case 'register': {
    return [checkUserName(), checkPassword(), checkEmail()];
  }

  case 'changePassword': {
    return [checkCurrentPassword(), checkNewPassword(), checkConfirmPassword()];
  }

  case 'update': {
    return [checkUserNameEdit()];
  }
  }
};