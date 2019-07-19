const delegates = require('delegates')
const Koa = require('./lib/application.js');
const app = new Koa();

app.listen(3000, () => {
  console.log('server is running 3000');
})
const ctx = {
  request: {
    url: 'baidu.com'
  },
  response: {
    body: 123
  }
}
delegates(ctx, 'request') //代理
.access('url')
delegates(ctx, 'response') //代理
.access('body')
console.log(ctx.url === ctx.request.url);
ctx.body = 456;
console.log(ctx);