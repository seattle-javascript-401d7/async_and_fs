/* eslint-env mocha */

const expect = require('chai').expect;
const filePull = require(__dirname + '/../lib/filePull');

describe('file pull stuff', () => {
  it('should pull in a file and return the first 8 bytes in hex', done => {
    filePull(__dirname + '/../one.txt').then(function(data) {
      expect(data.toString('hex', 0, 8)).to.eql('6f6e65206f6e6520');
      done();
    });
  });
});
