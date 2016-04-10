const fs = require("fs");

const FileParser = module.exports = function (files, cb, writeStream) {
  this.files = files;
  this.cb = cb;
  this.writeStream = writeStream || process.stdout;
  this.parsed = 0;
  this.readArray = [];
  this.printString = [];
};

FileParser.prototype.start = function () {
  var file;

  for (var i = 2; i >= 0; i--) {
    file = this.files.pop();

    ((i, file) => {
      fs.readFile(file, (err, data) => {
        if (err) {
          return process.stderr.write(err);
        }

        this.readArray[i] = data.toString("hex", 0, 8);
        this.parsed++;

        if (this.parsed === 3) {
          this.printString = this.readArray.reverse().join(", ");
          this.writeStream.write(this.printString + "\n");
          return this.cb();
        }
      });
    })(i, file);
  }
};

var files = ["three.txt", "two.txt", "one.txt"];
var fp = new FileParser(files, function () {});
fp.start();
