var EE = require('events');
var fs = require('fs');

var ee = new EE();

ee.on('first', () => {
  fs.readFile(__dirname + '/text/one.txt', (err, data) => {
    debugger;
    if (err) return console.log(err);
    console.log('from one: ' + data.toString());
    ee.emit('second');
  });
});

ee.on('second', () => {
  fs.readFile(__dirname + '/text/two.txt', (err, data) => {
    if (err) return console.log(err);
    console.log('from two: ' + data.toString());
    ee.emit('third');
  });
});

ee.on('third', () => {
  fs.readFile(__dirname + '/text/three.txt', (err, data) => {
    if(err) return console.log(err);
    console.log('from three: ' + data.toString());
  });
});
ee.emit('first');
