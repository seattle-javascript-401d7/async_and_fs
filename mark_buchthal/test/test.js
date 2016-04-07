
var expect = require('chai').expect;
var app = require(__dirname + '/../lib/app');

describe('answer', function () {
  it('first item should be 4669727374207465', function() {
    expect(app.answer[0]).is.eql('4669727374207465');
  });

  it('length should be 1', function() {
    app.readOne();
    expect(app.answer.length).is.eql(1);
  });

  it('length should be 2', function() {
    app.readTwo();
    expect(app.answer.length).is.eql(2);
  });

  it('length should be 3', function() {
    app.readThree();
    expect(app.answer.length).is.eql(3);
  });
});
