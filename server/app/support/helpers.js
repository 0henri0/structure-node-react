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

exports.updateImage = () => {

};

exports.getDomain = (req) => {
  return req.protocol + '://' + req.get('host') + '/';
};
