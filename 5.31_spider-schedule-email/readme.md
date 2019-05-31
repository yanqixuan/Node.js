# node爬取 + 定时邮件

## cheerio $
x.find()  查找x元素下面的内容   $('.box').find('p');
\s  空白字符
.replace(/\s/g,""); 去除无用的空白字符

## promise.all()
promise.all([])   接受一个右promise组成的数组
返回一个promise,所有promise resolve 的时候 它才resolve
resolve 时候的值  就是 所有promise resolve组成的数组

## 模板引擎
发漂亮的邮件  需要发送 html
html 不是静态的 需要数据填充
{{name}}  把变量编译进去
模板引擎 同理 编译成html
后端:MVC  jsp node模板引擎  用以承载页面  (view)
- ejs   变量<%= %>   js<% %>
- jade