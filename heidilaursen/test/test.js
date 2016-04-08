const expect = require('chai').expect;
const fs = require('fs');
const test = require(__dirname + '/../lib/fs_async');
const one = require(__dirname + '/../txt/one');

describe('fs_async', function () {
  it('should read one.txt', function (done) {
    var firstWord;
    test.on('4', function () {
      fs.readFile(one, function (err, data) {
        expect(error).to.eql(null);
        firstWord = data.toString('utf8', 0, 1);
        test.emit('4', firstWord);
        done();
      });
    });
  });
});
