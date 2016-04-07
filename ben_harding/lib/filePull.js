const fs = require('fs');

module.exports = exports = function(file) {
  return new Promise(function(fulfill, reject) {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      fulfill(data);
    });
  });
};
