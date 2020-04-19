// curl localhost:3000 -d username=asdf
var connect = require('connect');
var bodyParser = require('body-parser');
var contentType = require('content-type');
var getRawBody = require('raw-body');

var limit = function (req, res, next) {
    getRawBody(req, {
        length: req.headers['content-length'],
        limit: '1mb',
        encoding: contentType.parse(req).parameters.charset
    }, function (err, string) {
        if (err) return next(err)
        req.text = string
        next()
    })
};
var app = connect()
    .use(limit)
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(function (req, res) {
        // .. do stuff to register the user ..
        console.log(req.body);
        res.end('Registered new user: ' + req.body.username);
    });

app.listen(3000);

// function type(type, fn) {
//     return function (req, res, next) {
//         var ct = req.headers['content-type'] || '';
//         if (0 != ct.indexOf(type)) {
//             return next();
//         }
//         fn(req, res, next);
//     }
// }

// var app = connect()
//     .use(type('application/x-www-form-urlencoded', connect.limit('64kb')))
//     .use(type('application/json', connect.limit('32kb')))
//     .use(type('image', connect.limit('2mb')))
//     .use(type('video', connect.limit('300mb')))
//     .use(connect.bodyParser())
//     .use(hello);