_.templateSettings.interpolate = /{([\s\S]+?)}/g;

mocha.setup({
    ui: "bdd",
    ignoreLeaks: true
});

var assert = chai.assert;
var expect = chai.expect;

//--- your setup code goes here (i.e. create test instances of your Constructors)
//--- your setup code goes here

var originalHtml = $(document.body.innerHTML);
var router = new app.Router();
var todo = new Todo();


//--- your tests go here
// an example test suite
// describe("Array", function() {
//     describe("#indexOf()", function() {
//         it("should return -1 when the value is not present", function() {
//             expect([1, 2, 3].indexOf(5)).to.equal(-1);
//             expect([1, 2, 3].indexOf(0)).to.equal(-1);
//         })
//     })
// })

describe("Router", function() {
        describe("#initialize()", function() {
            it("should setup two views, a Home and Profile", function() {
                expect(router.views.length).to.equal(2);
            })
            it("it should try to log me in", function() {
                expect(router.userCalled).to.equal(true);
            })
        })
    })

describe("todo", function() {
        describe("#done()", function() {
            it("it should return false when done", function() {
                expect(todo.this.where).to.equal(true);
            })
        })
    })
    //--- your tests go here

mocha.globals(["jQuery"]);
mocha.run();
