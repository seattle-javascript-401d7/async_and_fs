'use strict';

const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const EE = require('events');

const ee = require(__dirname + '/../lib/async-fs');

var fileOrder = [];

describe('runOne ee', function() {
  it('should console.log first 8 bits of one.txt in hex', function(done) {
    fs.readFile(__dirname + '/../one.txt', function(error, data) {
      expect(data.toString('hex', 0, 8)).to.eql('52756d6f20697320');
      expect(error).to.eql(null);
      fileOrder.push('one.txt');
      ee.emit('runTwo');
      done();
    });
  });
});

describe('runTwo ee', function() {
  it('should console.log first 8 bits of two.txt in hex', function(done) {
    fs.readFile(__dirname + '/../two.txt', function(error, data) {
      expect(data.toString('hex', 0, 8)).to.eql('6f6e652064617920');
      expect(error).to.eql(null);
      fileOrder.push('two.txt');
      ee.emit('runThree');
      done();
    });
  });
});

describe('runThree ee', function() {
  it('should console.log first 8 bits of three.txt in hex', function(done) {
    fs.readFile(__dirname + '/../three.txt', function(error, data) {
      expect(data.toString('hex', 0,8)).to.eql('416e642061742074');
      expect(error).to.eql(null);
      fileOrder.push('three.txt');
      done();
    });
  });
});

describe('fileOrder', function() {
  it('should contain one.txt, two.txt, three.txt', function() {
    expect(fileOrder).to.eql(['one.txt', 'two.txt', 'three.txt']);
  });
});
