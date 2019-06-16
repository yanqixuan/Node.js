// events 是原生的模块    供其它模块使用  比如http res继承自Event
const Events = require('events');
const ev = new Events();

ev.on('open',()=>{
  console.log('open 发生')
})
function callBack(){
  console.log('第二个回调')
}
ev.on('open',callBack)
// removeListener  移除事件
ev.emit('open');//触发open事件
ev.removeListener('open',callBack);  //指定移除的事件
ev.emit('open');

ev.once('one',(data)=>{ //只执行一次 
  console.log(data)
})
ev.emit('one','oneoneone');
ev.emit('one','two');