/**
 * Created by intelligrape on 16/1/15.
 */
var http = require('http');
var fs = require('fs');
var port = 8080;
var server = http.createServer(function (req, res) {
    var pathname = req.url;
    //serve plain text
    if (pathname == '/name') {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hi!! i am tom..");
        res.end();
    }
    //serve index.html page
    else if (pathname == '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile('index.html', function (err, html) {
            res.write(html);
            res.end();
        })

    }
    //serve static content like image
    else if (pathname == '/cat.jpg') {
        res.writeHead(200, {"Content-Type": "application/image"});
        fs.readFile('cat.jpg', function (err, image) {
            res.write(image);
            res.end();
        })

    } else {
        res.write("Aww!! you missed it baby...");
        res.end();
    }

});
server.listen(port, function () {
    console.log('Server listening at port http://localhost:%d/', port);
});

console.log('something going to happen...');