const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const ee = require(__dirname + '/../lib/read.js');

describe('files to be read', () => {
  it('should be an array', () => {
    expect(Array.isArray(ee.files)).to.eql(true);
  });
});
