const fs = require('fs');
const EE = require('events');


var ee = new EE();
ee.results = [];
ee.files = ['three.txt', 'two.txt', 'one.txt'];

module.exports = exports = ee.on('done', (fileArray) => {
  var nextFile = fileArray.pop();
  if (!nextFile) {
    ee.emit('finished');
    return console.log('done, results array: [' + ee.results + ']');
  }
  fs.readFile(nextFile, (err, data) => {
    if (err) return console.log(err);

    console.log('first 8 bits in hex of ' + nextFile + ': ' + data.toString('hex').slice(0,2));
    ee.results.push(data.toString('hex').slice(0,2))
    ee.emit('done', fileArray);
  });
});

ee.emit('done', ee.files);
