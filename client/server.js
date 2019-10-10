const express = require('express');
const next = require('next');
/* eslint-disable-next-line no-unused-vars */
const dotenv = require('dotenv').config({ path: __dirname + '/./../.env' });
const routes = require('./routes/routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({  dev });
const handle = routes.getRequestHandler(app);
const server = express();

app.prepare().then(() => {
  server.use(handle);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});
