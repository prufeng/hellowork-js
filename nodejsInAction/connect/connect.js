// test with:
// curl http://localhost:3000
// curl http://localhost:3000/admin/
// curl --user tobi:tobisdf http://localhost:3000/admin/users
// curl --user tobi:tobi http://localhost:3000/admin/
// curl --user tobi:tobi http://localhost:3000/admin/users

var connect = require('connect');
var app = connect();
app.use(logger);
// .use(restrictFileAccess)
// .use(serveStaticFiles)
app.use('/admin', restrict)
app.use('/admin', admin)
app.use(hello);
app.listen(3000);

function restrict(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization) return next(new Error('Unauthorized'));
    var parts = authorization.split(' ')
    var scheme = parts[0]
    var auth = new Buffer(parts[1], 'base64').toString().split(':')
    var user = auth[0]
    var pass = auth[1];
    authenticateWithDatabase(user, pass, function (err) {
        if (err) return next(err);
        next();
    });
}

function authenticateWithDatabase(user, pass, callback){
    if(user == 'tobi' && pass == 'tobi'){
        console.log('Username and password are right, tobi');
        callback();
    }else{
        callback(new Error('Username or password is not right!'));
    }
}

function admin(req, res, next) {
    console.log(req.url);
    switch (req.url) {
        case '/':
            res.end('try /users');
            break;
        case '/users':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(['tobi', 'loki', 'jane']));
            break;
    }
}

function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}