require('env2')('./.env');  //yarn add env2
const {env} = process; //全局process
// console.log(env);
module.exports={
  host:env.HOST,
  port:env.PORT
}