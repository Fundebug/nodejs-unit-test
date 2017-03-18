/*global it */

var add = require("../add1.js");
var assert  = require("assert");


// 当2个参数均为整数时
it("should return 3", function()
{
    var sum = add(1, 2);
    assert.equal(sum, 3);
});

// 当第2个参数为String时
it("should return undefined", function()
{
    var sum = add(1, "2");
    assert.equal(sum, undefined);
});

// 当只有1个参数时
it("should return undefined", function()
{
    var sum = add(1);
    assert.equal(sum, undefined);
});
