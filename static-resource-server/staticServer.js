const http = require('http')
const fs = require('fs')
const path = require('path')
// 浏览器转圈  说明没有响应
// 接受浏览器请求，返回资源
// live-server  localhotst:8080/static/
http.createServer((req,res)=>{
    // console.log(req.url);
    // 当访问/static/index.html时 ->
    // 当访问/static/xx.png时 ->
    const url = req.url;
    if(/^\/static\//.test(url)){//如果是静态资源则
        staticServer(req,res);
        return false;
    }
    // fs.readFile('./static/index.html','binary',(err,file)=>{
    //     res.write(file,'binary');
    //     res.end();
    // })
})
.listen(8080,()=>{
    console.log('server is running 8080');
})
function staticServer(req,res){
    let url = req.url;
    console.log('url',url);
    if(url==='/static/') url += 'index.html';
    const filePath = path.join(__dirname,url);
    fs.exists(filePath,exists=>{
        if(!exists){
            res.end(`the request url: ${filePath} Not Found 404`);
        } else {
            fs.readFile(filePath,'binary',(err,file)=>{
                if(!err){
                    res.write(file,'binary');
                    res.end();
                }
            })
        }
    })
}