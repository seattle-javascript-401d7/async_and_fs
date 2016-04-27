'use strict'

const EE = require('events');
const fs = require('fs');

const ee = new EE();

var one = 'one.txt';
var two = 'two.txt';
var three = 'three.txt';

var fileArray = [];

fs.readFile(__dirname + '/../txt/one.txt', function (err, data) {
  if (err) return console.log(err);

  ee.emit('one:done', data);
});

ee.on('one:done', function (data) {
  console.log(data.toString('hex', 0, 8));
  fs.readFile(__dirname + '/../txt/two.txt', function (err, data) {
    if (err) return process.stdout(err);
    fileArray.push(one);
    ee.emit('two:done', data);
  });
});

ee.on('two:done',function (data) {
  console.log(data.toString('hex', 0, 8));
  fs.readFile(__dirname + '/../txt/three.txt', function (err, data) {
    if (err) return process.stdout(err);
    fileArray.push(two);
    ee.emit('three:done', data);
  });
});

ee.on('three:done', function (data) {
  console.log(data.toString('hex', 0, 8));
  fileArray.push(three);
  console.log(fileArray);
})

module.exports = exports = fileArray;
