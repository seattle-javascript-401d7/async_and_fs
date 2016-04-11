const fs = require('fs');
const EE = require('events');

var ee = new EE();

module.exports = exports = function() {
  ee.on('dowork', fileArray => {
    var workFile = fileArray.pop();
    if (!workFile) return;

    fs.readFile(workFile, (err, data) => {
      if (err) return console.log(err);

      console.log(data.toString('hex', 0, 8) + ' ' + workFile);
      ee.emit('dowork', fileArray);
    });
  });

  var files = ['three.txt', 'two.txt', 'one.txt'];

  ee.emit('dowork', files);
};
