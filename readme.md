# Node.js
## 创建服务器
var http = require("http"); 引入require模块
用http.createServer()方法创建服务器,并使用listen方法绑定端口号，函数通过request,response接受和响应数据
设置HTTP头，状态码200，文件类型，字符集。
页面打印值 res.write('hello world')
结束响应   res.end('Hello World\n')
.listen(8080)