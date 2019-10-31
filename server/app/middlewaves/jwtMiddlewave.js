const jwt         = require('jsonwebtoken');
const configAuth  = require('../../config/auth');
const constants   = require('../../config/constants');
const cookieParser = require('cookie-parser')

exports.checkAdmin = (req, res, next) => {
  const token = req.headers[process.env.AUTHORIZATION_HEADER] || req.signedCookies;
  console.log(token);
  if (token) {
    jwt.verify(token, configAuth.SERVER_JWT_SECRET_ADMIN, function(err, decoded) {
      if (decoded && decoded.rule === constants.IS_ADMIN) {
        next();
      } else {
        return res.status(401).json({ msg:'Unauthorized' });
      }
    });
  } else {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
};

exports.checkLogin = (req, res, next) => {
  const token = req.headers[process.env.AUTHORIZATION_HEADER];
  if (token) {
    jwt.verify(token, configAuth.SERVER_JWT_SECRET_USER, function(err, decoded) {
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
