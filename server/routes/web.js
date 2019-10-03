const express = require('express');
const router = express.Router();

/*controllers */
const home = require('../app/controllers/mylog/home');
const detail = require('../app/controllers/mylog/detail');

/*validation */
const homeBlogValidator = require('../app/validators/homeMyblog');

/*routes */
/*-------------------------------home------------------------------------ */
router.get('/', (req, res) => {
  res.send('welcome!!!');
});
router.get('/home', homeBlogValidator.validator('index'), home.index);
router.get('/posts/:id', detail.index);

module.exports = router;
