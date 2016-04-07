/* eslint-env mocha */

const expect = require('chai').expect;
const fs = require('fs');

describe('file pull stuff', () => {
  it('should pull in a file and return the first 8 bytes in hex', done => {
    fs.readFile(__dirname + '/../one.txt', (err, data) => {
      if (err) return console.log(err);

      expect(data.toString('hex', 0, 8)).to.eql('6f6e65206f6e6520');
      done();
    });
  });
});
