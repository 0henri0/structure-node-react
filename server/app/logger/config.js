const { createLogger, format } = require('winston');
const { combine, errors, json, timestamp, splat, printf } = format;

exports.transports = {
    error: {
      filename: `${__dirname}/reports/errors/%DATE%-error.log`,
      level: 'error',
      datePattern: 'YYYY-MM-DD-HH',
      handleExceptions: false,
      json: true,
      maxsize: '5m', // 5MB
      maxFiles: '7d', // d ~ days
      colorize: true,
    },
    info: {
      filename: `${__dirname}/reports/requests/%DATE%-info.log`,
      level: 'info',
      datePattern: 'YYYY-MM-DD-HH',
      handleExceptions: false,
      json: true,
      maxsize: '5m', // 5MB
      maxFiles: '7d', // d ~ days
      colorize: true,
    },
  }

exports.myFormat = printf((value) => {
  const status = value.level;
  switch (status) {
    case 'error':
      return `${value.timestamp} ${value.level}: ${value.message}${value.stack ? ' - ' + value.stack : ''}`;
    case 'info':
      const params = value.message.params;
      const body = value.message.body;
      const url = value.message.originalUrl;
      const method = value.message.method;
      return `${value.timestamp} ${value.level}: method: ${method} --★★★-- url: ${url} --★★★-- body: ${JSON.stringify(body)}--★★★-- params: ${JSON.stringify(params)}`;
    default:
      return '';
  }
})