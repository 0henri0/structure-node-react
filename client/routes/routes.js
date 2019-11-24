const routes = require('next-routes')

module.exports = routes()
  .add('auth/login', '/login')
  .add('web/index', '/')
  .add('web/post/article', '/article/:slug')
  .add('web/about/about', '/about')
  .add('web/contact/contact', '/contact')


  // // routes for admin
  // .add('admin', '/admin', 'admin/index')
