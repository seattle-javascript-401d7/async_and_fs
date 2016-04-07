const expect = require('chai').expect;
const ee = require(__dirname + '/../lib/filereading');

describe('files are in an array', () => {
  it('should show files in an array', () => {
    expect(Array.isArray(ee.files)).to.eql(true);
  });
});
