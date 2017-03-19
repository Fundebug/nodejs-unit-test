/*global it*/

require("../server.js");
var http = require("http");
var assert = require("assert");


it("should return hello fundebug", function(done)
{
    http.get("http://localhost:8000", function(res)
    {
        res.setEncoding("utf8");

        res.on("data", function(text)
        {
            assert.equal(res.statusCode, 200);
            assert.equal(text, "Hello Fundebug");
            done();
        });
    });
});
