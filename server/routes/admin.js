const express = require('express');
const router = express.Router();

/*controllers */
const categories  = require('../app/controllers/admin/categories');
const users       = require('../app/controllers/admin/users');
const posts       = require('../app/controllers/admin/posts');
const tags        = require('../app/controllers/admin/tags');
const auth        = require('../app/controllers/admin/auth/auth');
const admin       = require('../app/controllers/admin/admins');

/*validations */
const categoriesValidate  = require('../app/validators/categories');
const usersValidate       = require('../app/validators/users');
const postsValidate       = require('../app/validators/posts');
const tagsValidate        = require('../app/validators/tags');
const adminsValidate      = require('../app/validators/admins');
const uploadMiddleware    = require('../app/middlewaves/uploadMiddleware');

/*middlewaves */
const { checkAdmin } = require('../app/middlewaves/jwtMiddlewave');

/*-------------------------------auth-------------------------------------- */
router.post('/login', auth.login);
router.post('/refresh_token', auth.refreshToken);

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
router.post('/posts/create', [uploadMiddleware.single('image_title'), postsValidate.validate('create')], posts.store);
router.put('/posts/:id/edit',[uploadMiddleware.single('image_title'), postsValidate.validate('update')], posts.update);
router.delete('/posts/:id', posts.delete);

/*-------------------------------tags-------------------------------------- */
router.get('/tags', tags.index);
router.get('/tags/all', tags.all);
router.post('/tags/create', tagsValidate.validate('create'), tags.store);
router.put('/tags/:id/edit', tags.update);
router.get('/tags/:id', tags.detail);
router.delete('/tags/:id', tags.delete);

/*-------------------------------categories-------------------------------- */
router.get('/categories', categories.index);
router.get('/categories/all', categories.all);
router.post('/categories/create', [uploadMiddleware.single('image'), categoriesValidate.validate('create')], categories.store);
router.put('/categories/:id/edit', uploadMiddleware.single('image'), categories.update);
router.get('/categories/:id', categories.detail);
router.delete('/categories/:id', categories.delete);
module.exports = router;
