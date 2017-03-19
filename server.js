var http = require("http");

var server = http.createServer((req, res) =>
{
    res.writeHead(200,
    {
        "Content-Type": "text/plain"
    });

    res.end("Hello Fundebug");
});


server.listen(8000);

module.exports = server;
