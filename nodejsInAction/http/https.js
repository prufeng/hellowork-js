var https = require('https');
var fs = require('fs');
var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./key-cert.pem')
};
https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(3000);

// openssl genrsa 1024 >key.pem
// openssl req -x509 -new -key key.pem > key-cert.pem