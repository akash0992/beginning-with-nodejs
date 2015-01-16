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


// Chatroom

// usernames which are currently connected to the chat


io.on('connection', function (socket) {

    // when the client emits 'new message', this listens and executes
    socket.on('new message', function (data) {
        // we tell the client to execute 'new message'
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    });

    // when the client emits 'add user', this listens and executes


    // when the user disconnects.. perform this

});

console.log('something going to happen...');