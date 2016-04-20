const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const ee = require(__dirname + '/../lib/read.js');

describe('files to be read', () => {
  it('should be an array', () => {
    expect(Array.isArray(ee.files)).to.eql(true);
  });

  it('should check if the result is 16 character hexadecimal', (done) => {
    ee.on('data', (fileArray) => {
      var nextFile = fileArray.pop();
      if (!nextFile) done();
      expect(fileArray).to.not.include(nextFile);
      fs.readFile(nextFile, (err, data) => {
        if (err) return console.log(err);
        var hexData = data.toString('hex', 0, 8);
        expect(hexData).to.have.lengthOf(16);
        expect(hexData).to.match(/^[0-9A-Fa-f]+$/);
        console.log(hexData);
        ee.emit('done', fileArray);
      });
    });
    ee.emit('done', ee.files);
    done();
  });
});
