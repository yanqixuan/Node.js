## 跨域
浏览器的安全策略，
协议 域名 端口 有一个不一致的时候就存在跨域
https://www.abc.com/a https://www.abc.com/b

## cors
cross origin resource share
1. 一个标准，规定了一些 http 的 首部字段，让服务器允许哪些网站可以访问。
2. 规定，如果是非简单请求，浏览器会先发一个预检请求，从服务端知道是否允许跨域，若果允许 才会发出正式的请求。
3. 非简单请求 简单请求

## jsonp 原理
1. script 标签 可以跨域
2. 加载进来的内容会被当作 js 执行
3. 后端 先获取到 前端发出的 callback 在 callback里面 插入自己想要返回的内容
4. 前端 拿到返回的内容当作 js 执行，
```js
getUser(
{
  name: "abc",
  age: 18
}
```
5. 预先定义好一个函数
6. 缺点：只能 get 请求
7. 写一个 promise 风格的jsonp函数
8. param = {type: 'man', age: 18}

jsonp(url, param = {})
  .then(res => {
    console.log(res)
  })

1. 一个全局的方法
2. 插入一个 script 标签， 根据方法名 param 拼接 url
3. 根据 js 的 加载情况 判断 请求成功与否 返回数据
4. script 标签上面 有事件

## iframe跨域
可以引入一个跨域的html文件
1. 引入 和 后端接口同源的一个 iframe
2. 该 iframe 不存在跨域 可以任意请求
3. 和 iframe 通信 postMessage 触发message事件

## 同一个页面里的 所有iframe 共享 window.name


## server 后端
koa-static 映射过 /url

## static 前端
live-server static
前后端 通信 fe-iframe 文件收到后端的结果 middle 后端的static iframe

window.name
1. 上一步一样
2. iframe 请求 放在一个共享的 window.name上
3. fe-iframe.html 得到请求结果
4. 请求完成后，跳到一个第三方页面，再执行定义fe-iframe.html 里面的回调

## 代理
webpack-dev-server
live-server --proxy=/api:http://localhost:9090/api/

## 反向代理
live-server --proxy=/api:http://localhost:9090/api/
live-server --proxy=/api:http://localhost:7070/api/
live-server --proxy=/api:http://localhost:6060/api/
去到哪都可以拿到结果,对于客户端来说，最终请求的地方是未知的。

## 正向代理
对于服务端，客户端是未知的。