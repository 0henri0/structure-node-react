const express = require('express');
const router = express.Router();

/*controllers */
const home  = require('../app/controllers/mylog/home');

/*validation */


/*routes */
/*-------------------------------home------------------------------------ */
router.get('/home', home.index);


module.exports = router;