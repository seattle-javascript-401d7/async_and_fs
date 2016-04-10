const expect = require("chai").expect;
const FileParser = require(__dirname + "/../lib/async");

describe("async order", () => {
  beforeEach(() => {
    this.files = [__dirname + "/three.txt",
                  __dirname + "/two.txt",
                  __dirname + "/one.txt"];
    this.testStream = {
      write: function () {}
    };
  });

  it("should return hex strings in order", (done) => {
    var fp = new FileParser(this.files, function () {
      expect(this.parsedString).to.eql("6f6e650a, 74776f2074776f20, 74687265650a");
      done();
    }, this.testStream);
    fp.start();
  });
});
