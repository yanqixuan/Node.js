const http = require('http');
const url = require('url');
const queryString = require('querystring');
http.createServer((req,res)=>{
    // 前端发来的url请求在req里 req请求
    if(req.url === '/favicon.ico')return;   //来自根目录的请求
    // query 查询部分
    const urlObj = url.parse(req.url);
    const queryObj = queryString.parse(urlObj.query);
    console.log(queryObj);
    // console.log(urlObj);
    // console.log(req.url);
    // 解析为 {query:'蜗牛',type:'all'}
    res.writeHead(200,{ //200状态码
        'Content-Type':'text/html;charset=utf-8'   //指定返回内容类型
    })
    res.end(  //res.end只是返回内容

    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      ${JSON.stringify(queryObj)}
    </body>
    </html>
    `);
})
.listen(3000,()=>{
    console.log('服务正在3000端口');
})   //在3000端口上运行
