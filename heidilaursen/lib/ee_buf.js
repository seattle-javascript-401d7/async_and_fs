'use strict'

const EE = require('events');
const fs = require('fs');

const ee = new EE();

var data = __dirname + '/../txt/one.txt';

console.log(data.toString());

fs.readFile(data);

files = ['one.txt', 'two.txt', 'three.txt'];

ee.on('first', (data) => {
  console.log(data.toString('hex'));
  fs.readFile(__dirname + '/../one.txt', (err, data) => {
    if (err) return console.log(err);

    ee.emit('second', data);
  });
});

ee.on('second', (data) => {
  console.log(data.toString('hex'));
  fs.readFile(__dirname + '/../two.txt', (err, data) => {
    if (err) return console.log(err);

    ee.emit('two', data);
  });
});

ee.on('third', (data) => {
  console.log(data.toString('hex'));
  fs.readFile(__dirname + '/../one.txt', (err, data) => {
    if (err) return console.log(err);

    ee.emit(data);
  });
});
