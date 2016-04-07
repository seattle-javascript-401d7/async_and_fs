'use strict';

const fs = require('fs');
const expect = require('chai').expect;
var results = (__dirname + '/../results.txt');

describe('test for async.js', () => {
  it('should output first 8 bytes of 3 text files in order', () => {
    expect(fs.readFileSync(results).toString()).to.eql('41536561206272654254756e6970206743536f2074686973');
  });
});
