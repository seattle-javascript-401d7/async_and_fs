const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();

fs.readFile('one.txt', function (err, data) {
  if (err) return console.log(err);
  emitter.emit('one:done', data);
});

emitter.on('one:done', function (data) {
  console.log(data.toString('utf-8', 0, 8));
  fs.readFile('two.txt', function (err, data) {
    if (err) return console.log(err);
    emitter.emit('one:two', data);
  });
});

emitter.on('two:done', function (data) {
  console.log(data.toString('utf-8', 0, 8));
  fs.readFile('three.txt', function (err, data) {
    if (err) return console.log(err);
    emitter.emit('three:done', data);
  });
});

emitter.on('three:done', function (data) {
  console.log(data.toString('utf-8', 0, 8));
});
