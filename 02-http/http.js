var http = require('http');

http.createServer(function(req, res){

  res.end("Don't hack me!")

}).listen(8081);

console.log("Run server");
