'use strict'

const EE = require('events');
const fs = require('fs');

const ee = new EE();

var files = ['one.txt', 'two.txt', 'three.txt'];

fs.readFile(__dirname + '/../txt/one.txt', (err, data1) => {
  if (err) return console.log(err);
  console.log(data1.toString('hex', 0, 8));

  ee.emit('two', data1);
});

ee.on('two', (data2) => {
  fs.readFile(__dirname + '/../txt/two.txt', (err, data2) => {
    if (err) return process.stdout(err);
    console.log(data2.toString('hex', 0, 8));

    ee.emit('three', data2);
  });
});

ee.on('three', (data3) => {
  fs.readFile(__dirname + '/../txt/three.txt', (err, data3) => {
    if (err) return process.stdout(err);
    console.log(data3.toString('hex', 0, 8));

    ee.emit(data3);
  });
});
