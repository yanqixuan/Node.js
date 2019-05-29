var http = require('http')
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/JSON'})
    response.end('hello world')
}).listen(8080)

console.log('6666')