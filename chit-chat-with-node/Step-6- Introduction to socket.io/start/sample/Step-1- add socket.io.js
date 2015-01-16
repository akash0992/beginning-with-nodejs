/**
 * Created by intelligrape on 16/1/15.
 */
/**
 * Created by intelligrape on 16/1/15.
 */
var http = require('http');
var fs = require('fs');
var express = require('express');


var socketIo = require('socket.io');


var port = 8080;
var app = express();
var server = http.createServer(app);

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// serve static content from public place...
app.use(express.static(__dirname + '/public'));


var io = socketIo(server);

console.log('something going to happen...');