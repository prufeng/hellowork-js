// curl localhost:3000 -d username=asdf
// curl -d '{"username":"tobi"}' -H "Content-Type: application/json" localhost:3000
// curl localhost:3000 -F image=unins000.msg -F name=tobi
var connect = require('connect');
var bodyParser = require('body-parser');
var qs = require('qs');
var url = require('url');
var multipart = require('connect-multiparty')();
var app = connect()
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use('/upload', multipart, (req, res) => {
        console.log(req.files); //undefined
    })
    .use(function (req, res) {
        console.log(req.url);
        let q = url.parse(req.url);
        // console.log(q);
        console.log(qs.parse(q.query));
        // .. do stuff to register the user ..
        console.log(req.body);
        res.end('Registered new user: ' + req.body.username);
    });

app.listen(3000);