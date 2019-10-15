const Admin = require('../../../models/admin');
const jwt = require('jsonwebtoken');
const { encryptPassword, generateToken, getTokenByRefreshToken } = require('../../../services/admin/authService');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });
    const passwordHash = encryptPassword(password, admin.salt);

    if (passwordHash != admin.password_hash) {
      return res.status(401).json({ msg: 'Unauthorized!'});
    }

    const apiToken = await generateToken(admin);
    admin.refresh_token.push(apiToken.refresh_token);
    admin.save();

    return res.status(200).json({
      msg: 'success',
      ...apiToken
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.refreshToken = async (req, res) => {
  try {
  const refreshToken = req.headers[process.env.AUTHORIZATION_HEADER_REFRESH_TOKEN];

    if (refreshToken) {
      const token = await getTokenByRefreshToken(refreshToken);

      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ msg: 'Unauthorized' });
    }
  } catch (error) {
    return res.status(500).json({ msg: 'Unauthorized' });
  }
};
