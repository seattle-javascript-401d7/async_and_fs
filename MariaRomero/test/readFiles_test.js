/* esling-env mocha */
const expect = require('chai').expect;
const testReader = require(__dirname + '/../lib/readFiles');

describe('readFile', () => {
  it('should read text files in order: one, two, three', (done) => {
    testReader.emit('first');
    testReader.on('firstDone', (data) => {
      var textOne = data.toString('utf8', 0, 7);
      expect(textOne).to.eql('Four sc');
    });

    testReader.on('secondDone', (data) => {
      var textTwo = data.toString('utf8', 0, 7);
      expect(textTwo).to.eql('I am ha');
    });

    testReader.on('thirdDone', (data) => {
      var textThree = data.toString('utf8', 0, 7);
      expect(textThree).to.eql('We set ');
    });
    done();
  });
});
