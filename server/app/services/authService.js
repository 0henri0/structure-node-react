const crypto = require('crypto');

exports.encryptPassword = (password, salt) => {
    salt = salt + '';
  const passwordHash = crypto.createHmac('sha256', salt).update(password).digest('hex');

  return passwordHash;
}

exports.makeSalt = () => {

  return Math.round(new Date().valueOf() * Math.random()) + '';
}
