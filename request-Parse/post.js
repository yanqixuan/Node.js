const http = require('http');
http.createServer((req, res) => {
    console.log(req.method, req.url);
    console.log(req.headers['content-type'])    //前端传来的content-type
    if (req.method === 'POST' && req.url === '/user') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        })

        req.on('end', () => {
            if (req.headers['content-type'] === 'application/json')
                res.writeHead(200, { //200状态码     加一个响应头
                    'Content-Type': 'application/json;charset=utf-8'   //指定返回内容类型
                })
            res.end(data);    //结束        
        })
    }
})
    .listen(3000, () => {
        console.log("服务运行在3000");
    })