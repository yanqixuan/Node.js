// 单点入口
const Hapi = require('hapi')
const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi'); //引入一个路由文件
const routesShop = require('./routes/shops') //引入shoups路由
const routesOrders = require('./routes/orders')

const configServer = require('./config')
const pluginHapi = require('./plugins/hapi-swagger')  //引入swaggin插件

// server.connection({ //监听3000端口  服务
//   port:3000,
//   host:'127.0.0.1'
// })
// server.connection(configServer)
server.connection({
  port:configServer.port,
  host:configServer.host
})

// 中间件
const init = async ()=>{
  await server.register([
    ...pluginHapi
  ]);
  // 配置路由
  server.route([
    ...routesHelloHapi,
    ...routesShop,
    ...routesOrders
  ]);
  await server.start();
  console.log(`server running at:${server.info.uri}`);
}

init();