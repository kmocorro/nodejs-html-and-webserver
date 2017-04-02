// dealing with dynamic html running in a web server

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.htm',
    'utf8');
    html = html.replace('{message}', 'Hey! I am here!');
    res.end(html);

}).listen(3333, '127.0.0.1');