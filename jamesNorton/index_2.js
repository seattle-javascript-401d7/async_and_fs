const fs = require('fs');
const EventEmitter = require('events');

var files = ['one.txt', 'two.txt', 'three.txt'];
var ee = new EventEmitter;

ee.on('go', (file) => {
  fs.readFile(file, (err, data) => {
    if (err) return console.log('Error');
    //console.log(data.toString('hex', 0, 8)); //stolen from Hollis!!
    console.log(data.slice(0,8).toString());
  });
});

ee.emit('go', files[0]);
ee.emit('go', files[1]);
ee.emit('go', files[2]);
