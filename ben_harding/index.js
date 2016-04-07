const filePull = require(__dirname + '/lib/filePull');

var files = ['one.txt', 'two.txt', 'three.txt'];

files.forEach(function(ele) {
  filePull(ele).then(function(data) {
    console.log(data.toString('hex', 0, 8) + ' ' + ele);
  });
});
