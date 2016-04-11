const fs = require('fs');

var files = ['one.txt', 'two.txt', 'three.txt'];

var promiseArray = module.exports = exports = files.map(function(file) {
  return new Promise(function(fulfill, reject) {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      fulfill([data, file]);
    });
  });
});

Promise.all(promiseArray).then(function(allPromises) {
  allPromises.forEach(function(ele) {
    console.log(ele[0].toString('hex', 0, 8) + ' ' + ele[1]);
  });
});
