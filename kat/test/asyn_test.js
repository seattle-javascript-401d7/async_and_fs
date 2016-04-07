const expect = require('chai').expect;
const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();

var order = [];
var correctOrder = ['46696c65204f6e65', '46696c652074776f', '66696c6520332068'];

describe('First File should', function () {
  it('console.log should read "46696c65204f6e65"', function (done) {
    fs.readFile(__dirname + '/../one.txt', function (err, data) {
      emitter.emit('one:done', data);
      order.push(data.toString('hex', 0, 8));
      expect(data.toString('hex', 0, 8)).to.eql('46696c65204f6e65');
      expect(err).to.eql(null);
      done();
    });
  });
});

describe('Second file should', function () {
  it('console.log should read "46696c652074776f"', function (done) {
    fs.readFile(__dirname + '/../two.txt', function (err, data) {
      emitter.emit('two:done', data);
      order.push(data.toString('hex', 0, 8));
      expect(data.toString('hex', 0, 8)).to.eql('46696c652074776f');
      expect(err).to.eql(null);
      done();
    });
  });
});

describe('Third file should', function () {
  it('console.log should read "66696c6520332068"', function (done) {
    fs.readFile(__dirname + '/../three.txt', function (err, data) {
      emitter.emit('three:done', data);
      order.push(data.toString('hex', 0, 8));
      expect(data.toString('hex', 0, 8)).to.eql('66696c6520332068');
      expect(err).to.eql(null);
      done();
    });
  });
});

describe('Correct order of results', function () {
  it('the order of the results is "46696c65204f6e65", "46696c652074776f", "66696c6520332068"', function (done) {
    expect(order).to.eql(correctOrder);
    expect(true).to.eql(false);
    done();
  });
});
