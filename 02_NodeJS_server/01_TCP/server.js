var net = require('net');

var server = net.createServer(function(c){
    console.log("client connected");

    c.on('data',function(){
        console.log("data received");
    });
    c.on('end',function(){
        console.log("client diconnected");
    });
});

server.listen(3000, function(){
    console.log("server started on port 3000")
})