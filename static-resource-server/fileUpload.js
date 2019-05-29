const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
        //请求方式为post
        // 解析文件
        // 生成form实例
        const form = new formidable.IncomingForm();
        form.uploadDir = './static/';   //设置目标存放的文件夹
        form.parse(req, (err, fields, files) => {
            console.log(files, fields);
            // <input type="file" name="upload">
            const oldPath = files.upload.path;//原来的路径
            const fileName = files.upload.name;//原来的名字
            // static\\upload_7d0ea65d681b43c27eb6063ee5ffdc42
            const dirname = path.dirname(oldPath);//static
            const newPath = path.join(dirname, fileName);
            fs.rename(oldPath, newPath, (err) => {//文件改名
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                }); 
                res.end('ok');
            });

        })
        return false;//不执行后面代码
    }

    res.writeHead(200, {
        'Content-Type': 'text/html'
    }); 
    res.end(
        // 当点击submit时，表单数据提交到名为/upload的页面
        `<form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="upload">
            <input type="text" name="nickname">
            <input type="submit" value="submit">
        </form>`
    )
}).listen(8080, () => {
    console.log('server is running port 8080');
})