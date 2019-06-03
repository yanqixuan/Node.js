const Koa = require('koa');

// 应用
const app = new Koa();
// 管理员用户
const admin = new Koa();
// ctx 封装了 req res
app.use(async(ctx,next)=>{
  // 后台没有回应  koa没有回应 自己处理了 not found
  console.log(1);//响应体
  // 交给下一个中间件
  await next();
  console.log(1);
})
app.use(async(ctx,next)=>{
  ctx.body = `hello Koa`;//响应体
  console.log(2),
  await next();
  console.log(2)
})
app.use(async(ctx,next)=>{
  ctx.body = `hello Koa`;//响应体
  console.log(3),
  await next();
  console.log(3)
})
app.use(async(ctx,next)=>{
  ctx.body = `hello Koa`;//响应体
  console.log(4),
  await next();
  console.log(4)
})
app.listen(3000,()=>{
  console.log('server is running 3000')
});
admin.listen(4000,()=>{
  console.log('server is running 4000')
})