const express = require('express');
const router = express.Router();

/*controllers */
const home = require('../app/controllers/myblog/home');
const posts = require('../app/controllers/myblog/posts');
const auth = require('../app/controllers/myblog/auth/auth');
const users = require('../app/controllers/myblog/users');
const categories = require('../app/controllers/myblog/categories');
const tags = require('../app/controllers/myblog/tags');

/*validation */
const usersValidate = require('../app/validators/users');

/*routes */
/*-------------------------------home------------------------------------ */
router.get('/', (req, res) => {
  res.send('welcome!!!');
});
router.get('/home', home.index);
router.get('/home/get_post', home.getPost);

/*-------------------------------users------------------------------------- */
router.post('/register', usersValidate.validate('register'), users.store);
router.get('/profile/:id', users.detail);
router.put('/profile/:id/edit', users.update);

/*-------------------------------post----------------------------- */
router.get('/posts', posts.lastestPosts);
router.get('/posts/popularPosts', posts.popularPosts);
router.get('/posts/:id', posts.detail);

/*-------------------------------comment----------------------------------- */
router.post('/posts/:idPost/comment', posts.postComment);

/*-------------------------------comment----------------------------------- */
router.post('/posts/:idPost/rate', posts.postRate);

/*-------------------------------category----------------------------- */
router.get('/categories/categoriesRightSiderBar', categories.categoriesRightSiderBar);

/*-------------------------------tag----------------------------- */
router.get('/tags/tagsRightSiderBar', tags.tagsRightSiderBar);


/*-------------------------------auth----------------------------------- */
router.post('/login', auth.login);
router.post('/refresh_token', auth.refreshToken);

module.exports = router;
