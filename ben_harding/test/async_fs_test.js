/* eslint-env mocha */

const expect = require('chai').expect;
const fs = require('fs');
const promiseArray = require(__dirname + '/../index2.js');

describe('file pull stuff', () => {
  it('should pull in a file and return the first 8 bytes in hex', done => {
    fs.readFile(__dirname + '/../one.txt', (err, data) => {
      if (err) return console.log(err);

      expect(data.toString('hex', 0, 8)).to.eql('6f6e65206f6e6520');
      done();
    });
  });
});

describe('attempting to promise test', () => {
  var outputArray = [];

  before(function(done) {
    Promise.all(promiseArray).then(function(allPromises) {
      allPromises.forEach(function(ele) {
        outputArray.push(ele[0].toString('hex', 0, 8) + ' ' + ele[1]);
      });
    });

    done();
  });

  it('should output the files in order', function(done) {
    expect(outputArray).to.eql(['6f6e65206f6e6520 one.txt', '74776f2074776f20 two.txt', '7468726565207468 three.txt']);
    done();
  });
});
