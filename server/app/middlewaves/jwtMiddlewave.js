const jwt         = require('jsonwebtoken');
const configAuth  = require('../../config/auth');
const constants   = require('../../config/constants');

exports.checkAdmin = (req, res, next) => {
  try {
    const token = req.headers[process.env.AUTHORIZATION_HEADER] || req.signedCookies.adminInfo.token;
    if (token) {
      jwt.verify(token, configAuth.SERVER_JWT_SECRET_ADMIN, function(_err, decoded) {
        if (decoded && decoded.rule === constants.IS_ADMIN) {
          next();
        } else {
          return res.status(401).json({ msg:'Unauthorized' });
        }
      });
    } else {
      return res.status(401).json({ msg: 'Unauthorized' });
    }
  } catch (error) {
    return res.status(500).json({ msg: 'server is error.' });
  }
};

exports.checkLogin = (req, res, next) => {
  const token = req.headers[process.env.AUTHORIZATION_HEADER];
  if (token) {
    jwt.verify(token, configAuth.SERVER_JWT_SECRET_USER, function(_err, decoded) {
      if (decoded && decoded.rule === constants.IS_USER) {
        next();
      } else {
        return res.status(401).json({ msg:'Unauthorized' });
      }
    });
  } else {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
};
