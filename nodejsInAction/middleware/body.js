// curl localhost:3000 -d username=asdf
// curl -d '{"username":"tobi"}' -H "Content-Type: application/json" localhost:3000


var connect = require('connect');
var bodyParser = require('body-parser');
var app = connect()
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use(function (req, res) {
        // .. do stuff to register the user ..
        // console.log(req.body)
        res.end('Registered new user: ' + req.body.username);
    });

    app.listen(3000);