const chai = require("chai");
const expect = chai.expect;
const fs = require("fs");
const async = require(__dirname + "/../lib/async.js");
var expected = [1, 2, 3];

describe("readFile processes", () => {
  it("value should equal 8 bytes of hex from async.js", () => {
    fs.readFile(__dirname + "/../one.txt", (err, data1) => {
      console.log("first");
      expect(err).to.be.null;
      expect((data1.toString("hex", 0, 8))).to.equal("4261636f6e206970");
    });
  });
  it("value should equal 8 bytes of hex from async.js", () => {
    fs.readFile(__dirname + "/../two.txt", (err, data1) => {
      console.log("second");
      expect(err).to.be.null;
      expect((data1.toString("hex", 0, 8))).to.equal("4c65742773207075");
    });
  });
  it("value should equal 8 bytes of hex from async.js", () => {
    fs.readFile(__dirname + "/../three.txt", (err, data1) => {
      console.log("third");
      expect(err).to.be.null;
      expect((data1.toString("hex", 0, 8))).to.equal("49206c696b652063");
    });
  });
});
describe("file order", () => {
  it("orderArray.length should equal expected length (3 for each)", (done) => {
    expect(async.length).to.equal(expected.length);
    done();
  });
  it("should return orderArray, which represents the order in which the text files were pushed", function(done) {
    expect(async).to.eql(expected);
    done();
  });
});
