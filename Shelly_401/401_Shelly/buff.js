const EE = require('events');
const fs = require('fs');
var ee = new EE();

ee.on('done', (fileArray) => {
  var nextFile = fileArray.pop();

  if(!nextFile) return console.log('done');
  fs.readFile(nextFile, (err, data) => {
    if (err) return console.log(err);
    console.log(data.toString('hex', 0,8));
    ee.emit('done', fileArray);
  });
});

var files = ['three.txt', 'two.txt', 'one.txt'];
// var files = 'one.txt';
ee.emit('done', files);

module.exports = ee.emit;
module.exports = ee.on;
module.exports = files;
