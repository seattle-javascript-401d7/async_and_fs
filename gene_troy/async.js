const fs = require('fs');
var files = ['one.txt', 'two.txt', 'three.txt'];

var promiseArray = module.exports = exports = files.map((file) => {
  return new Promise((fulfill, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      fulfill([data, file]);
    });
  });
});

Promise.all(promiseArray).then((allPromises) => {
  allPromises.forEach((ele) => {
    console.log(ele[0].toString('hex', 0, 8) + ' ' + ele[1]);
  });
});
