const expect = require("chai").expect;
const FileParser = require(__dirname + "/../lib/async");

describe("async order", () => {
  beforeEach(() => {
    this.files = [__dirname + "/files/one.txt",
                  __dirname + "/files/two.txt",
                  __dirname + "/files/three.txt"];
    this.testStream = {
      write: function () {}
    };
  });

  it("should return strings in order", (done) => {
    var fp = new FileParser(this.files, function () {
      expect(this.combTextStr).to.eql("One one , Two two , Three th");
      expect(this.combHexStr).to.eql("4f6e65206f6e6520, 54776f2074776f20, 5468726565207468");
      done();
    }, this.testStream);
    fp.start();
  });
});
