const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const ee = require(__dirname + '/../lib/read');


describe('Files to be read', () => {
  it('should be an array', () => {
    expect(Array.isArray(ee.files)).to.eql(true);
  });
});

describe('Test .on() function', function() {
  it('console logged result is a 16 character hexadecimal', function(done) {
    ee.on('done', (fileArray) => {
      var nextFile = fileArray.pop();
      if (!nextFile) done();
      // check to see if file was popped from array
      expect(fileArray).to.not.include(nextFile);
      fs.readFile(nextFile, (err, data) => {
        if (err) return console.log(err);
        var hexData = data.toString('hex', 0, 8);
        // check to see if return was hexadecimal and 16 characters long
        expect(hexData).to.have.lengthOf(16);
        expect(hexData).to.match(/^[0-9A-Fa-f]+$/);
        console.log(hexData);
        ee.emit('done', fileArray);
      });
    });
    ee.emit('done', ee.files);
  });
});
