#koa
node 框架
tj:koa co

## 中间件 middleWare 洋葱模型
  流水线  请求可以通过很多中间件完成 一个中间件完成可以交给下一个中间件(koa的特色)
  async方法 async(ctx,next)

  作用:解耦，一个中间件负责一件事

## http
  自定义响应头,通常以 X 开头

## ejs语法
  <%= %>  输出数据到模板(转义后的)
  <% %> 代表js语句
  <%- %> 输出数据到模板(未转义的 发挥html的作用)
  include('header') 引入其它模块
