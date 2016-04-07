const chai = require('chai');
const expect = require('chai').expect;
const buff = require(__dirname + '/../buff.js');
const one = require(__dirname + '/../one.txt');
const EE = require('events');
const fs = require('fs');
var ee = new EE();
var files = ['three.txt', 'two.txt', 'one.txt'];



describe('this thing', ()=>{
  describe('this shouldx', ()=>{
    it('should do x ', (done)=>{
      expect(fs.readFile(one)).to.equal('1 text');
      done();
    });
  });
});
