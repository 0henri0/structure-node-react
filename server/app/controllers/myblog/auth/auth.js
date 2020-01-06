const User = require('../../../models/user');
const { encryptPassword, generateToken, getTokenByRefreshToken } = require('../../../services/myblog/authService');
const logError = require('../../../logger/logError');
const app = require('../../../../config/app');
/**
 * Login for myblog.
 * @param {obj} req
 * @param {obj} res
 */
exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ msg: 'Unauthorized!'});
    }
    const passwordHash = encryptPassword(password, user.salt);

    if (passwordHash != user.password_hash) {
      return res.status(401).json({ msg: 'Unauthorized!'});
    }

    const apiToken = await generateToken(user);
    user.refresh_token.push(apiToken.refresh_token);
    user.save();
    const {username, avatar} = user;
    const cookieOptions = app.cookieOptions;
    const dataResponse = {
      _id : user.id,
      ...apiToken,
      username,
      avatar
    }

    return res.status(200).cookie('userInfo', dataResponse, cookieOptions).json({
      msg: 'success',
      _id : user.id,
      ...apiToken,
      username,
      avatar
    });
  } catch (error) {
    //write Log info
    logError.error(error);

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
    //write Log info
    logError.error(error);

    return res.status(500).json({ msg: 'Unauthorized' });
  }
};
