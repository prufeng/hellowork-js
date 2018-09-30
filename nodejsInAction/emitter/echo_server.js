var net = require('net');
var server = net.createServer(function(socket){
    // socket.on('data', function(data){
    socket.once('data', function(data){//only response to the first event
        socket.write(data);
        console.log(data.toString());
    });
});
server.listen(8888, function(){
    console.log('Server is listening on 8888');
});