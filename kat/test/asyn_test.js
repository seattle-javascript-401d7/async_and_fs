const expect = require('chai').expect;
const fs = require('fs');
const q = require('q');
const EventEmitter = require('events');

const emitter = new EventEmitter();

describe('Should print', function () {
  it('console.log should read "46696c65204f6e65"', function (done) {
  //call the function that you are testing
    var result = fs.readFile(__dirname + '/../one.txt', function (err, data) {
      if (err) return console.log(err);
      emitter.emit('one:done', data);
    });
    //create a promise
    q.nfcall(result).then(function(data) {
      expect(data).to.eql('46696c65204f6e65');
      done();
    }, function(error) {
      assert.fail(error);
      done();
    });
  });
});
