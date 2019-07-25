const _ = require('lodash');
const validator = require('validator');  //常用验证的包
const validators = {
  // 一系列检测方法
  required(val) { return !_.isEmpty(val)}, //不能为空
  range({min, max, val}) {
    return !!(min <= val.length && val.length <= max) //确保一定是布尔值
  },
  isString(val) {
    return _.isString(val)
  }
}

for ( const [key,val] of Object.entries(validator)) {  //Object.entries 遍历每一个
  if (key.match(/^is/)) {
    validator[key] = val
  }
}
console.log(validators);

module.exports = (req, res, next) => {
  req.checkBody = rule => check(rule, 'body');
  req.checkQuery = rule => check(rule, 'query');
  req.checkParams = rule => check(rule, 'params');

  const check = (rules, type) => {
    for (const [filedName, fieldVaidator] of Object.entries(rules)) { //把每个对象拿出来解构
      const val = req[type][filedName] | '';
      let pass = false; //初始为false,通过后为true

      for (const [fn, valid] of Object.entries(fieldVaidator)) {
        const msg = typeof valid === 'string' ? valid : valid.message;  //vaild为string或object
        let param = val;

        pass = validators[fn](param);
        if(!pass){  //如果不通过返回msg
          return msg;
        }
      }
    }
  }

  console.log('-----validators middleware')
  next();
}