/*global it*/

var request = require("supertest");
var server = require("../server.js");
var assert = require("assert");


it("should return hello fundebug", function(done)
{
    request(server)
        .get("/")
        .expect(200)
        .expect(function(res)
        {
            assert.equal(res.text, "Hello Fundebug");
        })
        .end(done);
});