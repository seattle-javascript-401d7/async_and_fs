'use strict';

const fs = require('fs');
const EE = require('events');

const ee = module.exports = new EE();

ee.on('runOne', function() {
  console.log('running one');
  fs.readFile(__dirname + '/../one.txt', function(error, data) {
    if(error) {
      return console.log(error);
    }
    console.log(data.toString('hex', 0, 8));

    ee.emit('runTwo');
  });
});

ee.emit('runOne');

ee.on('runTwo', function() {
  console.log('running two');
   fs.readFile(__dirname + '/../two.txt', function(error, data) {
    if(error) {
      return console.log(error);
    }
    console.log(data.toString('hex', 0, 8));
    ee.emit('runThree');
  });
});

ee.on('runThree', function() {
  console.log('running three');
  fs.readFile(__dirname + '/../three.txt', function(error, data) {
    if(error) {
      return console.log(error)
    }
    console.log(data.toString('hex', 0, 8));
  });
});
