import express from 'express'
import morgan from 'morgan'
import path from 'path'
import socketIO from 'socket.io'
// 服务器端
const app = express()
app.set('views',path.resolve(__dirname,'views'))
app.set('view engine','ejs')

app.use(morgan('dev'))

app.get('/',(request,response)=>{
    response.render('index')
})

let server = app.listen(8080,()=>{
    console.log('66666')
})

let io = socketIO(server)
// 监听连接事件
io.on('connection',(socket)=>{
    console.log('connected')
    socket.on('disconnect',()=>{
        console.log('disconnected')
    })
    socket.on("Message",(msg)=>{
        console.log(msg);
        io.emit('message',msg);
    })
})