## 请求解析

### 通用首部
- 请求头
    Content-Type:告诉后台 发送数据的格式
    post请求格式1: application/x-www-form-urlencoded   form默认编码
    表单编码的格式

    post请求格式2: application/json     json 交换数据
    json格式

    - 获取：
        req.headers['content-type']
    - 获取请求方式：
        req.methods
    - url
        req.url

- 响应头
    Content-Type:告诉浏览器 返回的东西是什么类型
    类型:text/plain text/html ...  image/jpg    mime

- get请求
    ?query=''&type=''&a=''

    解析
    1.url.parse()   得到query部分
    2.queryString() 

- createServer
    http 默认服务 80    listen 指定另一个端口