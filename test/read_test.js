const expect = require('chai').expect;
const reader = require(__dirname + '/../index.js');
const fs = require('fs');
const EE = require('events');

var ee = new EE();

// Just to double check syntax, and have a small victory
describe('basic mocha test', () => {
  it('should equal true', () => {
    expect(true).to.eql(true);
  });
});

describe('order test', () => {
  it('test array should equal initial array', (done) => {
    // var testArray = ['three.txt', 'two.txt', 'one.txt'];

    // test that files read without error
    ee.emit('done', 'one.txt');
    expect(err).to.be(false);
    done();

    // test that second array item is equal to the second array item after run  
    // expect(reader(testArray[1])).to.eql('5365636f6e642046');

  });
});


// is the correct hex transfer happening
// length 8
