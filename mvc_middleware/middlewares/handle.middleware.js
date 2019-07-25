module.exports = (req, res, next) => {
  res.handleError = (message = '', error = {}, code) => {
    if (code) {
      return (res.status(code).json({ // 如果有代码,返回结束中间件的同时，带上编码
        success:false,
        message,
        error
      })) 
    } else {
      return (res.json({
        success: false,
        message,
        error
      }))
    }
  }
  res.handleSuccess = (data, rest = {}) => {
    return (
      res.json({
        success: true,
        data,
        ...rest //还有其他附带的东西就展开
      })
    )
  }
  next();
}