const multer = require('multer');

exports.customMessageValidate = (errors) => {
  let customErrors = { ...errors.array() };

  for (let i in customErrors) {
    let param = customErrors[i].param;

    if (customErrors[param] == undefined) {
      customErrors[param] = '';
    } else {
      customErrors[param] += ', ';
    }

    customErrors[param] += customErrors[i].msg;
    delete customErrors[i];
  }

  return customErrors;
};

exports.updateImage = (srcFolder) => {
  const imagePath = 'img/categories';

  const upload = multer({
    limits: {
      fileSize: 4 * 1024 * 1024,
    }
  });
};

exports.getDomain = (req) => {
  return req.protocol + '://' + req.get('host') + '/';
};
