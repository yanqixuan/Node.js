const router = require('koa-router')();
// 接受
router.get('/signin',  async (ctx) => {
  // ctx.body = 'signin page';
  await ctx.render('signin');
})
// 处理表单的
router.post('/signin',async(ctx)=>{
  const {name,password,repeatPass} = ctx.request.body;
  console.log(name,password,repeatPass)
  ctx.body = {code:200};//认为处理成功
})
module.exports = router;