var http = require('http');

var server = http.createServer(function(request, response){
    response.end("Hello world");
});

server.listen(3001, function(){
    console.log("server started on port 3001")
})