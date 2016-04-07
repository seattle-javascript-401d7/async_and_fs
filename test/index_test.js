const chai = require("chai");
const expect = chai.expect;
const fs = require("fs");
const index = require(__dirname + "/../index.js");

debugger;
describe("first readFile", () => {
  it("should return a short string", (done) => {
    fs.readFile(__dirname + "/../one.txt", (err, data1) => {
      expect(err).to.be.null;
      expect((data1.toString("utf8", 0, 8))).to.equal("4261636f6e206970");
      done();
    });
  });
});
describe("Second readFile", () => {
  it("should return a short string", (done) => {
    fs.readFile(__dirname + "/../two.txt", (err, data1) => {
      console.log("second");
      expect(err).to.be.null;
      expect((data1.toString("utf8", 0, 8))).to.equal("4c65742773207075");
      done();
    });
  });
});
describe("Third readFile", () => {
  it("should return a short string", (done) => {
    fs.readFile(__dirname + "/../three.txt", (err, data1) => {
      console.log("third");
      expect(err).to.be.null;
      expect((data1.toString("utf8", 0, 8))).to.equal("3333333333333333");
      done();
    });
  });
});
describe("file order", () => {
  expect(orderArray).to.eql([1,2,3]);
})
