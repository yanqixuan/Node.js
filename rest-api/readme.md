# restful api
浏览器与服务器通信方式的一种设计风格
yarn add json-server
"scripts":{
  "server":"json-server db.json"
}

- restful中，一切皆资源
- url 来唯一定位资源的识别符  定位符
  /posts/:id/comments(/posts/1) 
- 添加一条评论  /comments/2
  {
    id:2,
    body:'好巧a',
    postId:1
  }
  /comments 设计好url POST
  POST 添加内容
  利用postman http://localhost:3000/comments  body  x-www-    post方式  发送过去

- 设计有意义的url
  资源  状态改变  状态切换使用定义的动词
  PUT 修改内容  /comments/2   body:'change'
  操作      SQL       HTTP动词
  CREATE    INSERT    POST
  READ      SELECT    GET
  UPDATE    UPDATE    PUT/PATCH PUT全给{body:'',postId:1}  PATCH只要给一部分
  DELETE    DELETE    DELETE