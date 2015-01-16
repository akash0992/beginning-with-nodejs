/**
 * Created by intelligrape on 16/1/15.
 */
var http = require('http');
var port = 8080;
var server = http.createServer(function (req, res) {
    console.log('connected...');

//   res.end('hi!! :-)');
});
server.listen(port, function () {
    console.log('Server listening at port http://localhost:%d/', port);
});
console.log('something going to happen...');