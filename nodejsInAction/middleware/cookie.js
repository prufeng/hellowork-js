// curl http://localhost:3000/ -H "Cookie: foo=bar, bar=baz"
// curl localhost:3000 -H "cookie: name=luna.PQLM0wNvqOQEObZXUkWbS5m6Wlg"
// curl localhost:3000 -H "cookie: cart=j:{\"items\":[1]}.sD5p6xFFBO/4ketA1OP43bcjS3Y"
// curl localhost:3000 --head

var connect = require('connect');
var cookieParser = require('cookie-parser');
var app = connect()
    .use(cookieParser('tobi is a cool ferret'))
    .use(function (req, res) {
        console.log(req.cookies);
        console.log(req.signedCookies);
        // res.setHeader('Set-Cookie', 'foo=bar');
        res.setHeader('Set-Cookie', 'foo=bar; tobi=ferret; Expires = Tue, 08 Jun 2021 10: 18: 14 GMT');
        res.end('hello\n');
    }).listen(3000);
