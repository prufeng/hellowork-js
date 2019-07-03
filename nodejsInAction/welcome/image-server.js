console.log(__dirname);
var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
//response.writeHead(200, {'Content-Type': 'text/plain;'});
//response.end('Hello World\n');    
response.writeHead(200, {'Content-Type': 'image/png'});
fs.createReadStream('./image.png').pipe(response);
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/' );
