'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const index = (__dirname + '/../results.txt');

describe('results.txt', function () {
  it('results.txt should return 4f6e652e7478742054776f2e7478742054687265652e7478', function() {
    expect(fs.readFileSync(index).toString()).to.eql('4f6e652e7478742054776f2e7478742054687265652e7478');
  });
});
