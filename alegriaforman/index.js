'use strict';

const fs = require('fs');
fs.truncate('results.txt', 0);

fs.readFile('one.txt', function (err, one) {
  if (err) return err;
  fs.writeFile('./results.txt', one.toString('hex', 0, 8), function(err) {
    console.log(one.toString('hex', 0, 8));
    if (err) return err;
  });
  second();
});

function second() {
  fs.readFile('two.txt', function (err, two) {
    if (err) return err;
    fs.appendFile('./results.txt', two.toString('hex', 0, 8), function(err) {
      console.log(two.toString('hex', 0, 8));
      if (err) return err;
    });
  third();
  });
}

function third(){
  fs.readFile('three.txt', function (err, three) {
    if (err) return err;
    fs.appendFile('./results.txt', three.toString('hex', 0, 8), function(err) {
      console.log(three.toString('hex', 0, 8));
      if (err) return err;
    });
  });
}
