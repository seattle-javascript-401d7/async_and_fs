const expect = require('chai').expect;
const fs = require('fs');
const EventEmitter = require('events');
const assert = require('assert');
const emitter = new EventEmitter();

describe('Should print', function () {
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
