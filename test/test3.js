/*global it */

require("should");
var merge = require("../merge.js");


// 当2个参数均为对象时
it("should success", function()
{
    var a = {
        name: "Fundebug",
        type: "SaaS"
    };

    var b = {
        service: "Real time bug monitoring",
        product:
        {
            frontend: "JavaScript",
            backend: "Node.js",
            mobile: "微信小程序"
        }
    };

    var c = merge(a, b);

    c.should.have.property("name", "Fundebug");
    c.should.have.propertyByPath("product", "frontend").equal("JavaScript");
});

// 当只有1个参数时
it("should return undefined", function()
{
    var a = {
        name: "Fundebug",
        type: "SaaS"
    };

    var c = merge(a);

    (typeof c).should.equal("undefined");
});
