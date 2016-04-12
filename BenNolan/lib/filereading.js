const fs = require('fs');
const EE = require('events');

const ee = module.exports = new EE();
ee.files=['three.txt', 'two.txt', 'one.txt'];

ee.readFiles = () => {
    ee.on('done', (fileArray) => {
      var nextFile = fileArray.pop();
      if (!nextFile) done();
      fs.readFile(nextFile, (err, data) => {
        if(err) return console.log(err);
        console.log(data.toString('hex', 0, 8));
        ee.emit('done', fileArray);
  });
});
ee.emit('done', ee.files);
};
