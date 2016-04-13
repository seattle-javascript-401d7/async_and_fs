'use strict';
const chai = require('chai');
const expect = chai.expect;
const FileParser = require(__dirname + '/../lib/async');

describe('async in the right order', () => {
  beforeEach(() => {
    this.files = [ __dirname + '/three.txt',
    __dirname + '/two.txt',
    __dirname + '/one.txt'];

    this.testStream = {
      data: '',
      write: function(input) {
        this.data += input;
      }
    };
  });

  it('should read files in order via async', (done) => {
    var fp = new FileParser(this.files, function(stream) {
      expect(stream.data).to.eql('666972737420636f7365636f6e642063746869726420636fdone');
      done();
    }, this.testStream);
    fp.start();
  });
});
