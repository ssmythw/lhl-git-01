const chai = require("chai"); // import the chai library
const assert = chai.expect; // establish a variable to be used in our tests
const validator = require("../javascript/groupValidator.js"); // import the file where our function lives
describe("The function groupValidator()", () => {
  // this is where we put our tests.
  it("should return true if there are between 2 and 5 group members", () => {
    assert(validator.isGroupValid(["a", "b", "c"])).to.be.true;
  });
  //test with 1 element
  it("should return false if there are fewer than 2 group members3", () => {
    assert(validator.isGroupValid(["a"])).to.be.false;
  });
  //test with 6 elements
  it("should return false if there is more than 5 group members", () => {
    assert(validator.isGroupValid(["a", "b", "c", "d", "e", "f"])).to.be.false;
  });
});
