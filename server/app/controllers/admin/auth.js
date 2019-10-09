const jwt       = require('jsonwebtoken');
const mongoose  = require('mongoose');
const User      = mongoose.model('User');
const  { encryptPassword } = require('../../services/authService');
const privateKey = process.env.SERVER_JWT_SECRET;
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email: email });

  passwordHash = encryptPassword(password, user.salt);
 
  if (passwordHash != user.password_hash) {
    res.status(401).json({ msg: 'Unauthorized!'})
  }
  try {
    let token = await jwt.sign({user}, privateKey, { expiresIn: '1h' });

    res.status(200).json({
      msg: 'success',
      _token: token
    })
  } catch (error) {
    res.status(500).json(error);
  }
  
}

exports.jwtMiddlewave = (req, res, next) => {
  console.log(this);

  return res.json(1);
}

exports.jwtMiddlewave2 = function (req, res, next) {
  console.log(this);
}