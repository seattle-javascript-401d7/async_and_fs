const expect = require('chai').expect;
const ee = require(__dirname + '/../lib/filereading');
const fs = require('fs');

describe('files are in an array', () => {
  it('should show files in an array', () => {
    expect(Array.isArray(ee.files)).to.eql(true);
  });
});
describe('Check event emitter', () => {
  debugger;
  it('should read files in order', (done) => {
    ee.on('done', (fileArray) => {
      var nextFile = fileArray.pop();
      if (!nextFile) done();
      expect(fileArray).to.not.include(nextFile);
      fs.readFile(nextFile, (err, data) => {
        if(err) return console.log(err);
        var hexData = data.toString('hex', 0, 8);
        expect(hexData).to.have.length(16);
        ee.emit('done', fileArray);
      });
    });
    ee.emit('done', ee.files);
  });
});
