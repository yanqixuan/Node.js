const express = require('express');
const path = require('path');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const validate = require('./middlewares/validate.middleware')
const handle = require('./middlewares/handle.middleware')

// 中间件在路由之前，做准备工作
app.use(bodyParser.urlencoded({extended: false})) //urlencoded 用来解析 request 中 body的 urlencoded字符
app.use(bodyParser.json({limit: '50mb'})) //bodyParser配置为json,限制50mb大小

app.use(handle) //处理错误中间件
// 验证中间件
app.use(validate)

app.use(router);

function start() {
  app.listen(3025, () => {
    console.log('server running')
  })
}

start();