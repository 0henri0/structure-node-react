'use strict';

const { createLogger, format } = require('winston');
const { combine, errors, json, timestamp, splat } = format;
const dailyRotateFile = require('winston-daily-rotate-file');
const config = require('./config');

const logger = createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    errors({ stack: true }),
    splat(),
    json(),
    config.myFormat
  ),
  transports: [new dailyRotateFile(config.transports.info)],
});

module.exports = logger;
