const Koa = require('koa');
const app = new Koa();
// 计算处理请求的时间
app.use(async(ctx,next)=>{
  const start = Date.now();
  await next();
  const end = Date.now();
  const diff = end -start;
  // 响应头里 writeHead Content-type
  ctx.set('X-Response-Time',`${diff}ms`);
  console.log(`spend ${diff}ms`);
})
// 负责响应
app.use(async(ctx)=>{
  ctx.body = 'hello koa';
})
app.listen(3001);