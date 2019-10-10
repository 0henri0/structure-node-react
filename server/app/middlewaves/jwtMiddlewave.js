const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SERVER_JWT_SECRET;

exports.checkAdmin = (req, res, next) => {
  const token = req.headers[process.env.AUTHORIZATION_HEADER];

  if (token) {
    jwt.verify(token, jwtSecret, function(err) {
      if (err) {
        return res.status(401).json({ msg:'Unauthorized' });
      }
      
      next();
    });
  } else {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
};
