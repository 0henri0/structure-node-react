const express = require('express');
const router = express.Router();

/*controllers */
const home = require('../app/controllers/mylog/home');
const detail = require('../app/controllers/mylog/detail');

/*validation */

/*routes */
/*-------------------------------home------------------------------------ */
router.get('/', (req, res) => {
  res.send('welcome!!!');
});
router.get('/home', home.index);
router.get('/home/get_post', home.getPost);

/*-------------------------------detail_post----------------------------- */
router.get('/posts/:id', detail.index);

module.exports = router;
