var events = require('events');
var myEmitter = new events.EventEmitter();
myEmitter.on('error1', function(err) {
    console.log('ERROR: ' + err.message);
});
// myEmitter.emit('error', new Error('Something is wrong.'));
myEmitter.emit('error');

//not work
process.on('uncaughtException', function(err){
    console.log('oops!');
    console.error(err.stack);
    process.exit(1);
});