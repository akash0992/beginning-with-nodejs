$(function () {
    var socket = io();
    $('button').click(function () {
        socket.emit('chat message', $('#message').val());
        $('#message').val('');
        return false;
    });
    socket.on('chat message', function (msg) {
        alert('message: ' + msg);
    });

});
