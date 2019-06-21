const inert = require('inert');
const vision = require('vision'); //获取版本信息
const package = require('package'); //可以读取package.json
const hapiSwagger = require('hapi-swagger');

module.exports = [
  inert,
  vision,
  {
    // 注入文件
    register: hapiSwagger,
    options:{
      info:{
        title:'接口文档',
        version:package.version //读取package.json的version
      },
      grouping:'tags',
      tags:[
        {name:'tests',description:'测试相关'}
      ]
    }
  }
]