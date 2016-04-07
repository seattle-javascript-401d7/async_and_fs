/* esling-env mocha */
const expect = require('chai').expect;
const fs = require('fs');
const testReader = require(__dirname + '/../lib/readFiles');

describe('readFile', function(){
  it('should read text files in order: one, two, three', function(done){
    var firstWord;
    testReader.on('fourth', function(){
      fs.readFile('textFiles/one.txt', function(error, data){
        expect(error).to.eql(null);
        firstWord = data.toString('utf8', 0, 4);
        testReader.emit('fourthDone', firstWord);
      });
    });
    testReader.on('fourthDone', function(firstWord){
      fs.readFile('textFiles/two.txt', function(error, data){
        expect(error).to.eql(null);
        expect(firstWord).to.eql('Four');
        firstWord = data.toString('utf8', 0, 1);
        testReader.emit('fifthDone', firstWord);
      });
    });
    testReader.on('fifthDone', function(firstWord){
      fs.readFile('textFiles/three.txt', function(error, data){
        expect(error).to.eql(null);
        expect(firstWord).to.eql('I');
        firstWord = data.toString('utf8', 0, 2);
        testReader.emit('sixthDone', firstWord);
      });
    });
    testReader.on('sixthDone', function(firstWord){
      expect(firstWord).to.eql('We');
      done();
    });
    testReader.emit('fourth');
  });
});
