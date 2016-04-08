const Async = require(__dirname + '/../lib/async');
const expect = require('chai').expect;


describe('async test', () => {
  beforeEach(() => {
    this.fileArray = [__dirname + '/../three.txt',
                      __dirname + '/../two.txt',
                      __dirname + '/../one.txt'];
    this.testSpace = {
      data: '',
      write: function(input) {
        this.data += input;
      }
    };
  });
  it('files log in order', (done) => {
    var async = new Async(this.fileArray, (stream) => {
// below, .eql(stuff) is first 8 bits in hex for each file concatenated with done
      expect(stream.data).to.eql('efbfbdefbfbdefbf0c5fefbfbdefbfbdefbfbd3eefbfbdefdone');
      done();
    }, this.testSpace);
    async.init();
  });
});
