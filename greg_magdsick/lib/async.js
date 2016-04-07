const fs = require('fs');
const EE = require('events')

var ee = new EE();
var results = [];

fs.readFile('one.txt', (err, data) => {
  if(err) console.log(err);
  var buffer = Buffer(data)
  console.log('first 8 bits in hex of one.txt: ' + data.toString('hex').slice(0,2));
  results.push(data.toString('hex').slice(0,2));
  ee.emit('oneDone');
});

ee.on('oneDone', () => {
  fs.readFile('two.txt', (err, data) => {
    if(err) console.log(err);
    var buffer = Buffer(data)
    console.log('first 8 bits in hex of two.txt: ' + buffer.toString('hex').slice(0,2));
    results.push(data.toString('hex').slice(0,2));
    ee.emit('twoDone');
  });
});

ee.on('twoDone', () => {
  fs.readFile('three.txt', (err, data) => {
    if(err) console.log(err);
    var buffer = Buffer(data)
    console.log('first 8 bits in hex of three.txt: ' + buffer.toString('hex').slice(0,2));
    results.push(data.toString('hex').slice(0,2));
  });
});
