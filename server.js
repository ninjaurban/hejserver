var http = require('http');

var server = http.createServer(function(request, response){
response.write('hej på dig');
  response.end();
});

server.listen(3000)