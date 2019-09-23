const express = require('express');
const router = express.Router();

/*controllers */
const users = require('../app/controllers/admin/users');

/*routes */

router.get('/user', users.index);
router.get('/user/:id', users.detail);
router.post('/user/create', users.store);
router.put('/user/:id/edit', users.update);
router.delete('/user/:id', users.detail);

module.exports = router;