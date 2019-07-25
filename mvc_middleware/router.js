const router = require('express').Router();
const user = require('./controllers/user.controller')

//  router中间件
//  MVC 路由文件只负责声明路由
router.post('/api/login', user.login);

module.exports = router;
