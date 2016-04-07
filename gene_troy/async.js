const fs = require('fs');

// Promise creator that reads a file and processes the data
var readYoFile = (filename, callback) => {
  var cb = callback || function() {}; // if no callback available, give an empty function
  return new Promise((resolve, reject) => { // promise constructor function
    fs.readFile(filename, (err, data) => {
      data = data.toString('hex',0,8); //convert to hex and slice off first 8 bytes
      if (err) {
        reject(err);
        return cb(err);
      }
      resolve(data);
      return cb(null, data);
    });
  });
};
//Let's process some files
readYoFile('one.txt')
  .then((data) => {
    console.log(data);
    readYoFile('two.txt')
      .then((data) => {
        console.log(data);
        readYoFile('three.txt')
          .then((data) => {
            console.log(data);
          });
      });
  })
  .catch((err) => {
    throw err;
  });
