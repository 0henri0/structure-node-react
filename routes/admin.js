const express = require('express');
const router = express.Router();

/*controllers */
const users = require('../app/controllers/admin/users');

/*routes */

router.get('/user', users.index);

module.exports = router;