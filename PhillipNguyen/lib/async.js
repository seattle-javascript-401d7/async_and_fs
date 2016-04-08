const EE = require('events');
const fs = require('fs');

var ee = module.exports = new EE();
  ee.newArray = [];


  ee.on('done', (fileArray) => {
    var nextFile = fileArray.pop();
    if (!nextFile) return console.log('done');
    fs.readFile(nextFile, (err, data) => {
      if (err) return console.log(err);

      newArray.push(data.toString());
      console.log(newArray);
      console.log(data.toString('hex', 0, 8));
      ee.emit('done', fileArray);
    });
  });

  ee.files = ['three.txt', 'two.txt', 'one.txt'];
  ee.emit('done', ee.files);
