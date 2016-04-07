const fs = require('fs');
const EE = require('events')

var ee = new EE();
var results = [];

ee.on('done', (fileArray) => {
  var nextFile = fileArray.pop();
  if (!nextFile) return console.log('done, results array: [' + results + ']');
  fs.readFile(nextFile, (err, data) => {
    if (err) return console.log(err);

    console.log('first 8 bits in hex of ' + nextFile + ': ' + data.toString('hex').slice(0,2));
    results.push(data.toString('hex').slice(0,2))
    ee.emit('done', fileArray);
  });
});

var files = ['three.txt', 'two.txt', 'one.txt'];
ee.emit('done', files);
