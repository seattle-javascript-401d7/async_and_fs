
const EE = require('events');
const fs = require('fs');
const ee = new EE();

var asyncReader = module.exports = {};

asyncReader.filesLoaded = 0;

asyncReader.dataArray = [];

asyncReader.checkAllLoaded = function() {
  this.filesLoaded += 1;
  if(this.filesLoaded == 3) {
    console.log(this.dataArray);
  }
}
asyncReader.start = function() {
  fs.readFile('textfiles/one.txt', (err, data) => {
    if (err) return console.log(err);

    console.log('first file ' + data.toString('hex',0,8));
    this.dataArray.push(data.toString('hex',0,8));
    this.checkAllLoaded();
    ee.emit('one:done', data);
  });
  ee.on('one:done', (data) => {
    fs.readFile('textfiles/two.txt', (err, data) => {
      if (err) return console.log(err);

      console.log('second file ' + data.toString('hex',0,8));
      this.dataArray.push(data.toString('hex',0,8));
      this.checkAllLoaded();
      ee.emit('two:done', data);
    });
  });
  ee.on('two:done', (data) => {
    fs.readFile('textfiles/three.txt', (err, data) => {
      if (err) return console.log(err);

      console.log('third file ' + data.toString('hex',0,8));
      this.dataArray.push(data.toString('hex',0,8));
      this.checkAllLoaded();
    });
  });
};
asyncReader.start();
