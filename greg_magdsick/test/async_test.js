const async = require(__dirname + '/../lib/async');
const expect = require('chai').expect;
// const fs = require('fs');
// const EE = require('events');

// const ee = new EE();

describe('async test', () => {
  it('files log in order', () => {
    async.emit('done', async.files);
    // ee.on('finished', () => {
      expect(async.results).to.eql(['efbfbdefbfbdefbf', '0c5fefbfbdefbfbd', 'efbfbd3eefbfbdef']);
      // done();
    // });
  });
});
