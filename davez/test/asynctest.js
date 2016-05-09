const expect = require('chai').expect;
const asyncReader = require(__dirname + '/../async2');

describe('the async file reader', () => {
  it('should read all files', (done) => {
    expect(asyncReader.dataArray.length).to.eql(3);
    done();
    asyncReader.start();
  })
})
