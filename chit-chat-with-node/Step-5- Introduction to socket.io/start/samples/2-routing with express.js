var http = require('http');
var fs = require('fs');
var port = 8080;
var express = require('express');
var app = express();
var server = http.createServer(app);
server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// Routing
app.get('/', function (req, res) {
    res.end('hey!! i m express');
});


console.log('something going to happen...');