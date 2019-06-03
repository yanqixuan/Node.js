const Koa = require('koa');
const views = require('koa-views'); //用来指定模板引擎
const path = require('path')
const app = new Koa();
app.use(
  views(//模板引擎在哪个位置
    path.join(__dirname,'./view'),{
      extension:'ejs'
    }
  )
)
const user = {
  name:'aj',
  post:[
    {id:0,title:'流动的svg线条'},
    {id:1,title:'Vue.js'}
  ]
}
const posts = [
  {
    id:0,
    content:'用svg + css 实现'
  },{
    id:1,
    content:'<strong>内容是vue.js</strong>'
  }
]
app.use(async(ctx)=>{
  // req res
  //  /user 用户的主页    /req.url 解析出请求的地址
  if(ctx.path === '/user'){
    // 返回一个用户页面   ejs   ejs提供了转html的中间件
    await ctx.render('user',{
      user
    })
  } else if(ctx.path === '/post'){
    // 封装了的get请求查询参数  ?id=1   把参数拿下来组成对象
    const {id} = ctx.query;

    const post = posts.find(item => item.id == id);
    await ctx.render('post',{post}) //渲染给post.ejs
  } else {
    ctx.body = '无法处理该路径' + ctx.request.url
  }
})
// .listen 就是 原生 http .listen
app.listen(8080,()=>{
  console.log('server is running 8080');
})