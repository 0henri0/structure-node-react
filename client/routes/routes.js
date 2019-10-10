const routes = require('next-routes')

module.exports = routes()
  .add('home', '/', 'web/index')
  .add('login', '/auth/login', 'auth/login')
  .add('register', '/auth/register', 'auth/register')
  .add('post', '/article/:slug', 'web/post/article')
  // routes for admin
  .add('admin', '/admin', 'admin/index')
