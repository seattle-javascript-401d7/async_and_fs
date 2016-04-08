const expect = require('chai').expect;
const FileReader = require(__dirname + '/../index');

describe('test order', () => {
  beforeEach(() => {
    this.files = [ __dirname + '/three.txt',
                   __dirname + '/two.txt',
                   __dirname + '/one.txt'];
  });

  it ('should read files in correct sequence', (done) => {
    var fr = new FileReader(this.files, function(){
      expect(this.testString).to.eql('first\nsecond\nthird\n');
      done();
    });
    fr.start();
  });
});
