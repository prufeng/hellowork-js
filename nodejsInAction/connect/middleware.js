// test with:
// curl http://localhost:3000/users
// curl http://localhost:3000/user/1
// curl -X DELETE http://localhost:3000/user/1

var connect = require('connect');
var logger = require('./logger');
var router = require('./router');

var routes = {
    GET: {
        '/users': function (req, res) {
            res.end('tobi, loki, ferret');
        },
        '/user/:id': function (req, res, id) {
            res.end('user ' + id);
        }
    },
    DELETE: {
        '/user/:id': function (req, res, id) {
            res.end('deleted user ' + id);
        }
    }
};

var app = connect();
app.use(logger(':method :url'));
app.use(router(routes));
app.listen(3000);
