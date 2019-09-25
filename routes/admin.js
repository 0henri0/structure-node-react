const express = require('express');
const router = express.Router();

/*controllers */
const users = require('../app/controllers/admin/users');
const posts = require('../app/controllers/admin/posts');

/*validation */
const usersValidate = require('../app/validators/users');
const postsValidate = require('../app/validators/posts');

/*routes */
/*-------------------------------users------------------------------------ */
router.get('/users', users.index);
router.get('/users/:id', users.detail);
router.post('/users/create', usersValidate.validate('register'), users.store);
router.put('/users/:id/edit', users.update);
router.delete('/users/:id', users.detail);

/*-------------------------------posts------------------------------------ */
router.get('/posts', posts.index);
router.get('/posts/:id', posts.detail);
router.post('/posts/create', postsValidate.validate('register'), posts.store);
router.put('/posts/:id/edit', posts.update);
router.delete('/posts/:id', posts.detail);

module.exports = router;