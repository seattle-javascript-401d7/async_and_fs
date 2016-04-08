const chai = require('chai');
const fs = require('fs');
const expect = chai.expect;
const async = require(__dirname + '/../lib/async');

var files = [__dirname + '/../lib/three.txt',__dirname + '/../lib/two.txt',__dirname + '/../lib/one.txt'];

describe('this function', () => {
  it('should pass', function() {
    fs.readFile(__dirname + '/../lib/one.txt', (err, data) => {
      expect(data.toString()).to.eql('first code to run\n');
    });
  });
});
