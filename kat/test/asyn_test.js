const expect = requier('chai').expect;


describe('Should run in order', function () {

  it('console.log should read "File One"', function () {
  //call the function that you are testing
  var result = fs.readFile('one.txt', function (err, data) {
    if (err) return console.log(err);
    emitter.emit('one:done', data);
  });
//assert
result.then(function(data) {
  expect(data).to.eql('one:done');
  done();
}, function(error) {
  assert.fail(error);
  done();
});
});
