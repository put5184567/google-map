var http          = require("http");
var fs            = require('fs');

http.createServer(function(req, res){
  if(req.url === '/' || req.url === '/index.html'){
    fs.readFile('./index.html', function(err, data){
      data = data.toString();
      res.setHeader('Content-Type', 'text/html');
      return res.end(data);
    });
  }
}).listen(8080);
console.log('ok');