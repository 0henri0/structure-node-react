const Admin = require('../../../models/admin');
const { encryptPassword, generateToken, getTokenByRefreshToken } = require('../../../services/admin/authService');
const appConfig = require('../../../../config/app');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });

    if (!admin) {
      return res.status(401).json({ msg: 'Unauthorized!'});
    }
    const passwordHash = encryptPassword(password, admin.salt);

    if (passwordHash != admin.password_hash) {
      return res.status(401).json({ msg: 'Unauthorized!'});
    }

    const apiToken = await generateToken(admin);
    admin.refresh_token.push(apiToken.refresh_token);
    admin.save();

    const dataResponse = {
      ...apiToken,
    };
    const cookieOptions = appConfig.cookieOptions;

    return res.status(200).cookie('adminInfo', dataResponse, cookieOptions).json({
      msg: 'success',
      ...apiToken,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const refreshToken = req.headers[process.env.AUTHORIZATION_HEADER_REFRESH_TOKEN] || req.signedCookies.adminInfo.refresh_token;
    console.log(req.signedCookies.adminInfo);
    if (refreshToken) {
      const token = await getTokenByRefreshToken(refreshToken);
      const cookieOptions = appConfig.cookieOptions;
      
      return res.status(200).cookie('adminInfo', {token, refresh_token: refreshToken}, cookieOptions).json({
        msg: 'success',
        token
      });
    } else {
      return res.status(401).json({ msg: 'Unauthorized' });
    }
  } catch (error) {
    return res.status(500).json({ msg: 'Unauthorized' });
  }
};
