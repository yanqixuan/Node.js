function compose(middleware) {
  return function (context) {
    // 中间件的执行
    return dispatch(0);
    function dispatch(i) {
      const fn = middleware[i];
      return Promise.resolve(fn(context, () => {
        return dispatch(i + 1);
      }));
    }
  }
}
module.exports = compose;