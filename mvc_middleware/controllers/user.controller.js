exports.login = async (req, res) => {
  console.log(req.body)
  // 参数的验证
  // if(req.body.username === '') {
  //   res.json({
  //     mes: '用户名不能为空'
  //   })
  // }

  // 参数验证抽象为模块 
  const msg = req.checkBody({ //手写验证中间件
    username: {
      required: '用户名不能为空'
    },
    password: {
      required: '密码不能为空'
    },
    code: {
      required: '验证码不能为空'
    }
  })
  console.log('msg---',msg);
  if (msg) {
    // 出错处理
    return res.handleError(msg);
  }
  // await models.query
  res.json({
    page: '登录'
  })
}