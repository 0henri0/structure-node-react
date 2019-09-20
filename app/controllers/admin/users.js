'use strict';

const User = require('../../models/user');

exports.index = async function(req, res) {
  let user = await User.find({});
  res.send(user)
}
