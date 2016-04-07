const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();

fs.readFile(__dirname + '/../one.txt', function (err, data) {
  if (err) return console.log(err);
  emitter.emit('one:done', data);
});

emitter.on('one:done', function (data) {
  console.log(data.toString('hex', 0, 8));
  fs.readFile(__dirname + '/../two.txt', function (err, data) {
    if (err) return console.log(err);
    emitter.emit('two:done', data);
  });
});

emitter.on('two:done', function (data) {
  console.log(data.toString('hex', 0, 8));
  fs.readFile(__dirname + '/../three.txt', function (err, data) {
    if (err) return console.log(err);
    emitter.emit('three:done', data);
  });
});

emitter.on('three:done', function (data) {
  console.log(data.toString('hex', 0, 8));
});
