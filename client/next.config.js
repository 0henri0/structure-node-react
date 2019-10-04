const withCSS = require('@zeit/next-css');

/* Without CSS Modules, with PostCSS */
// module.exports = withCSS();

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const Dotenv = require('dotenv-webpack');

module.exports = withCSS({
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '../.env'),
        systemvars: true
      })
    ];

    return config;
  }
});