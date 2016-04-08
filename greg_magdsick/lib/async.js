const fs = require('fs');
const EE = require('events');


const ShowFile = module.exports = exports = function(fileArray, cb, writeSpace) {
  this.fileArray = fileArray;
  this.ee = new EE();
  this.cb = cb;
  this.writeSpace = writeSpace || process.stdout;

  this.ee.on('done', (files) => {
    var nextFile = fileArray.pop();
    if (!nextFile) {
      this.writeSpace.write('done');
      return this.cb(this.writeSpace);
    }

    fs.readFile(nextFile, (err, data) => {
      if (err) return process.stderr.write(err);

      this.writeSpace.write(data.toString('hex', 0, 8));
      this.ee.emit('done', files);
    });
  });
};

ShowFile.prototype.init = function() {
  this.ee.emit('done', this.files);
};

var files = ['three.txt', 'two.txt', 'one.txt'];
var sf = new ShowFile(files, () => {});
sf.init();
