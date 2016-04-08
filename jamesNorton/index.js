module.exports = exports = function () {
  const fs = require('fs');
  const EE = require('events');

  var ee = new EE();
  var testArray = [];

  ee.on('done', (fileArray) => {
    var nextFile = fileArray.pop();

    if (!nextFile) return console.log('done');
    fs.readFile(nextFile, (err, data) => {
      if (err) return console.log(err);

      var bufData = data.toString('hex', 0, 8);

      testArrayBuilder(bufData);
      console.log(bufData);
      ee.emit('done', fileArray);
    });
  });

  function testArrayBuilder (string) {
    return testArray.push(string);
  }

  var files = ['three.txt', 'two.txt', 'one.txt'];
  ee.emit('done', files);
};
