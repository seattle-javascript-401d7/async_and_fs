const expect = require('chai').expect;
const fs = require('fs');
const EE = require('events');
const ee = new EE();

describe('correct order results', function () {
  it('should describe the order of results to be "4920686176652074", "546f74616c6c7920", "466f75722073636f"', function (done) {
    expect(order).to.eql(correctOrder);
    var order = [];
    var correctOrder = ['4920686176652074', '546f74616c6c7920', '466f75722073636f'];

    describe('First file should', function () {
      it('should console.log 4920686176652074', function (done) {
        fs.readFile(__dirname + '/../txt/one.txt', function (err, data) {
          ee.emit('one:done', data);
          order.push(data.toString('hex', 0, 8));
          expect(data.toString('hex', 0, 8)).to.eql('4920686176652074');
          expect(err).to.eql(null);
          done();
        });
      });
    });

    describe('Second file should', function () {
      it('should console.log 546f74616c6c7920', function (done) {
        fs.readFile(__dirname + '/../txt/two.txt', function (err, data) {
          ee.emit('two:done', data);
          order.push(data.toString('hex', 0, 8));
          expect(data.toString('hex', 0, 8)).to.eql('546f74616c6c7920');
          expect(err).to.eql(null);
          done();
        })
      })
    })

    describe('Third file should', function () {
      it('should console.log 466f75722073636f', function (done) {
        fs.readFile(__dirname + '/../txt/three.txt', function (err, data) {
          ee.emit('three:done', data);
          order.push(data.toString('hex', 0, 8));
          expect(data.toString('hex', 0, 8)).to.eql('466f75722073636f');
          expect(err).to.eql(null);
          done();
        })
      })
    })
  done();
  });
});
