const fs = require('fs');
const EE = require('events');

const ee = module.exports = new EE();

ee.on('done', (fileArray) => {
  var nextFile = fileArray.pop();
  if(!nextFile) return console.log('done');
  fs.readFile(nextFile, (err, data) => {
    if (err) return console.log(err);

    console.log(data.toString('hex', 8));
    ee.emit('done', fileArray);
  })
});
ee.files=['one.txt', 'two.txt', 'three.txt'];
