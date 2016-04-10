const fs = require("fs");

const FileParser = module.exports = function (files, cb, writeStream) {
  this.files = files;
  this.cb = cb;
  this.writeStream = writeStream || process.stdout;
  this.parsed = 0;
  this.parsedArray = [];
  this.parsedString = [];
};

FileParser.prototype.start = function () {
  var file;

  for (var i = this.files.length - 1; i >= 0; i--) {
    file = this.files.pop();

    ((i, file) => {
      fs.readFile(file, (err, data) => {
        if (err) {
          return process.stderr.write(err);
        }

        this.parsedArray[i] = data.toString("hex", 0, 8);
        this.parsed++;

        if (this.parsed === 3) {
          this.parsedString = this.parsedArray.reverse().join(", ");
          this.writeStream.write(this.parsedString + "\n");
          return this.cb();
        }
      });
    })(i, file);
  }
};

var files = ["three.txt", "two.txt", "one.txt"];
var fp = new FileParser(files, () => {});
fp.start();
