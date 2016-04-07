const chai = require('chai');
const expect = chai.expect;
var ee = require(__dirname + '/../lib/read');

describe('Files to be read', ()=>{
  it('should be an array',()=>{
    expect(Array.isArray(ee.files)).to.eql(true);
  });
});
