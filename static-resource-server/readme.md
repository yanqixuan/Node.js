# 静态资源服务
不会随着服务运行而改变内容:html,css,js,图片
1. 如果有index.html 则打开他
2. 否则列出说有文件
3. 请求路径和磁盘路径 一一对应

请求：
/static/*.* 磁盘位置 一一对应     ( ·_·)
1. 拿到 req.url
2. 读取 磁盘下面同一个位置  返回
3. 静态资源通常放在某一个目录下 /static/   所以请求都以某个目录开头

## 打开方式
普通打开:file:// 开头,本地文件读取协议  ./xx.png    可以显示本地相对路径的图片
服务器打开: http://localhost:8080/  http协议
    html里引入的资源 都会发出请求
    访问静态资源
req.url  为8080/ 后的磁盘路径

## 上传图片

## formidable 
解析请求的第三方包
    对象：fileds 非input[type="file"]的提交项
          files  input[type="file"]的提交项
          都是根据input的name属性来获取值

-   告诉服务器传了一个html类型过去
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.end(
        `<form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="upload">
            <input type="submit" value="submit">
        </form>`
    )