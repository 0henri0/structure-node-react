const express = require('express');
const router = express.Router();

/*controllers */
const categories  = require('../app/controllers/admin/categories');
const users       = require('../app/controllers/admin/users');
const posts       = require('../app/controllers/admin/posts');
const tags        = require('../app/controllers/admin/tags');
const auth        = require('../app/controllers/admin/auth');
const admin       = require('../app/controllers/admin/admins');

/*validations */
const categoriesValidate  = require('../app/validators/categories');
const usersValidate       = require('../app/validators/users');
const postsValidate       = require('../app/validators/posts');
const tagsValidate        = require('../app/validators/tags');
const adminsValidate      = require('../app/validators/admins');
/*middlewaves */
const { checkAdmin } = require('../app/middlewaves/jwtMiddlewave');
/*-------------------------------auth-------------------------------------- */
router.post('/login', auth.login);

/*routes */
/*-------------------------------middlewave_common------------------------- */
router.use((req, res, next) => {
  checkAdmin(req, res, next);
});

/*-------------------------------admins------------------------------------ */
router.post('/admins/create', adminsValidate.validate('register'), admin.store);

/*-------------------------------users------------------------------------- */
router.get('/users', users.index);
router.get('/users/:id', users.detail);
router.post('/users/create', usersValidate.validate('register'), users.store);
router.put('/users/:id/edit', users.update);
router.delete('/users/:id', users.detail);

/*-------------------------------posts------------------------------------- */
router.get('/posts', posts.index);
router.get('/posts/:id', posts.detail);
router.post('/posts/create', postsValidate.validate('create'), posts.store);
router.put('/posts/:id/edit', posts.update);
router.delete('/posts/:id', posts.delete);

/*-------------------------------tags-------------------------------------- */
router.get('/tags', tags.index);
router.post('/tags/create', tagsValidate.validate('create'), tags.store);
router.put('/tags/:id/edit', tags.update);
router.delete('/tags/:id', tags.delete);

/*-------------------------------categories-------------------------------- */
router.get('/categories', categories.index);
router.post('/categories/create', categoriesValidate.validate('create'), categories.store);
router.put('/categories/:id/edit', categories.update);
router.delete('/categories/:id', categories.delete);

module.exports = router;