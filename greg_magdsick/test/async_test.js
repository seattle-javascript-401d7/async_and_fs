const async = require(__dirname + '/../lib/async');
const expect = require('chai').expect;
const fs = require('fs');
const EE = require('events');

const ee = new EE;

ee.emit('done', ['three.txt', 'two.txt', 'one.txt']);

describe('async test', () => {
  it('one.txt fires first', (done) => {
    fs.readFile('one.txt', (err, data) => {
      ee.on('finished', (fileArray, results) => {
        expect(data.toString('hex',0,16)).to.eql(ee.results[0]);
        done();
      })
    })
  })
});
