const fs = require('fs');
const EE = require('events');


const FileReader = module.exports = exports = function (files, cb) {
  this.ee = new EE();
  this.files = files;
  this.testString = [];
  this.cb = cb;

  this.ee.on('done', (fileArray) => {
    var nextFile = fileArray.pop();

    if (!nextFile) {
      return  this.cb(this.testString);
    }
    fs.readFile(nextFile, (err, data) => {
      if (err) return console.log(err);

      var bufData = data.toString('hex', 0, 8);
      var bufTestData = data.toString();
      this.testString += bufTestData;
      console.log(bufData);
      this.ee.emit('done', fileArray);
    });
  });

  FileReader.prototype.start = function () {
    this.ee.emit('done', this.files);
  };
};

var files = ['three.txt', 'two.txt', 'one.txt'];
var fr = new FileReader(files, ()=> {});
fr.start();
