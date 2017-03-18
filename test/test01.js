/*global it, describe */

var should = require("should"); // jshint ignore:line
var add = require("../add2.js");

describe("add", function()
{
	// 当2个参数均为整数时
    it("should return 3", function()
    {
    	var sum  = add(1, 2);
        sum.should.equal(3);
    });

    // 当第2个参数为String时
    it("should return undefined", function()
    {
    	var sum  = add(1, "2");
        (typeof sum).should.equal("undefined");
    });

    // 当只有1个参数时
    it("should return undefined", function()
    {
    	var sum  = add(1);
        (typeof sum).should.equal("undefined");
    });
});
