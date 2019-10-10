'use strict';

const Admin = require('../../models/admin');
const { validationResult }          = require('express-validator');
const { customMessageValidate }     = require('../../support/helpers');
const { encryptPassword, makeSalt } = require('../../services/authService');

exports.store = async (req, res) => {
  const errors = validationResult(req);

  if (errors.array().length) {
    return res.status(422).json(customMessageValidate(errors));
  }
  const { email, password } = req.body;
  let admin = await Admin.find({ email });

  if (admin.length) {

    return res.status(422).json({ msg: 'The admin already exists.' });
  }
  try {
    let salt = makeSalt();
    let passwordHash = encryptPassword(password, salt);

    let params = {
      email: email,
      password_hash: passwordHash,
      salt: salt
    };
    let AdminCreate = new Admin(params);
    AdminCreate.save();

    return res.status(200).json({ data: { AdminCreate } });
  } catch (err) {

    return res.status(500).json(err);
  }
};
