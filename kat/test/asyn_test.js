const expect = require('chai').expect;
const fs = require('fs');
const EventEmitter = require('events');
const assert = require('assert');

const emitter = new EventEmitter();

describe('First File should', function () {
  it('console.log should read "46696c65204f6e65"', function (done) {
    fs.readFile(__dirname + '/../one.txt', function (err, data) {
      if (err) return console.log(err);
      emitter.emit('one:done', data);
      expect(data.toString('hex', 0, 8)).to.eql('46696c65204f6e65');
      done();
    });
  }, function(error) {
    assert.fail(error);
    done();
    });
  });

describe('Second file should', function () {
  it('console.log should read "46696c652074776f"', function (done) {
    fs.readFile(__dirname + '/../two.txt', function (err, data) {
      if (err) return console.log(err);
      emitter.emit('two:done', data);
      expect(data.toString('hex', 0, 8)).to.eql('46696c652074776f');
      done();
    });
  }, function(error) {
    assert.fail(error);
    done();
  });
});

describe('Third file should', function () {
  it('console.log should read "66696c6520332068"', function (done) {
    fs.readFile(__dirname + '/../three.txt', function (err, data) {
      if (err) return console.log(err);
      emitter.emit('three:done', data);
      expect(data.toString('hex', 0, 8)).to.eql('66696c6520332068');
      done();
    });
  }, function(error) {
    assert.fail(error);
    done();
  });
});
