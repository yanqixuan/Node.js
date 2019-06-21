npm init -y
yarn add hapi@16

- hapi 企业级开发node框架
  - 后端开发中的一些plugins
    API文档 自动生成

MVC 模型 视图 控制
1. app.js 单点入口

2. 职责分离 routes路由文件
    一个模块一个路由文件

3. config 配置文件

## env2的使用
  将加密的账号信息以配置文件的方式，加载进process,通过process.env获取
  .env 放入.gitignore

## swagger api文档生成工具
  yarn add hapi-swagger@7 inert@4 vision@4 package
  文档插件
  http://127.0.0.1:3000/documentation

## 传参
  yarn add joi@13