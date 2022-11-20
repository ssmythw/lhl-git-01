const chai = require("chai");
const assert = chai.assert;

const nameInverter = require("../nameInverter");

describe("nameInverter", function () {
  it("should return an empty string when given an empty string", () => {
    const input = "";
    const expected = "";
    assert.equal(nameInverter(input), expected);
  });

  it("should return the name when given a single name", () => {
    const input = "Brad";
    const expected = "Brad";
    assert.equal(nameInverter(input), expected);
  });
  it("should return a last-name, first-name when passed a first and last-name", () => {
    const input = "John Smith";
    const output = "Smith, John";
    assert.equal(nameInverter(input), output);
  });
  //stretch
  it("should return a last-name, first-name when passed a first and last-name with extra spaces around the names", () => {
    const input = "  John     Smith     ";
    const output = "Smith, John";
    assert.equal(nameInverter(input), output);
  });
  it("should return an empty string when passed a single honorific", () => {
    const input = "Dr. ";
    const output = "";
    assert.equal(nameInverter(input), output);
  });
  it("should return honorific first-name when passed honorific first-name", () => {
    const input = "Dr. John";
    const output = "Dr. John";
    assert.equal(nameInverter(input), output);
  });
  it("should return a honorific last-name, first-name when passed honorific first-name last-name", () => {
    const input = "Dr. John Smith";
    const output = "Dr. Smith, John";
    assert.equal(nameInverter(input), output);
  });
  it("should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", () => {
    const input = "Dr. John      Smith";
    const output = "Dr. Smith, John";
    assert.equal(nameInverter(input), output);
  });
  it("should throw an error when name is undefined", () => {
    const input = undefined;
    const output = Error;
    assert.equal(nameInverter(input), output);
  });
});
