const fs = require("fs");

const FileParser = module.exports = function (files, cb, writeStream) {
  this.files = files;
  this.cb = cb;
  this.writeStream = writeStream || process.stdout;
  this.parsed = 0;
  this.parsedTextArr = [];
  this.parsedHexArr = [];
  this.combTextStr = "";
  this.combHexStr = "";
};

FileParser.prototype.start = function () {
  for (var i = 0; i < this.files.length; i++) {
    ((i, file) => {
      fs.readFile(file, (err, data) => {
        if (err) {
          return process.stderr.write(err);
        }

        this.parsedTextArr[i] = data.toString("utf-8", 0, 8);
        this.parsedHexArr[i] = data.toString("hex", 0, 8);
        this.parsed++;

        if (this.parsed === this.files.length) {
          this.combTextStr = this.parsedTextArr.join(", ");
          this.combHexStr = this.parsedHexArr.join(", ");
          this.writeStream.write(this.combTextStr + "\n");
          this.writeStream.write(this.combHexStr + "\n");
          return this.cb();
        }
      });
    })(i, this.files[i]);
  }
};
