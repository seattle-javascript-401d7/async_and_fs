/* eslint-env mocha */

const expect = require('chai').expect;
const fs = require('fs');
const promiseArray = require(__dirname + '/../async.js');

describe('The async app', () => {
  it('should read a file and output 8 bytes of hex', done => {
    fs.readFile(__dirname + '/../one.txt', (err, data) => {
      if (err) return console.log(err);
      expect(data.toString('hex', 0, 8)).to.eql('3030303030303030');
      done();
    });
  });
});

describe('The async app', () => {
  var outputArray = [];
  before((done) => {
    Promise.all(promiseArray).then((allPromises) => {
      allPromises.forEach((element) => {
        outputArray.push(element[0].toString('hex', 0, 8) + ' ' + element[1]);
      });
    });
    done();
  });
// Note: one.txt goes first and is a HUGE file
  it('should output the 3 files in order', (done) => {
    expect(outputArray).to.eql(
      [
        '3030303030303030 one.txt',
        '3232323232323232 two.txt',
        '3333333333333333 three.txt'
      ]);
    done();
  });
});
