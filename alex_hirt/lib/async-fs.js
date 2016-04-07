const fs = require('fs');

function read() {
  fs.readFile('../one.txt', function(error, data) {
    if(error) {
      return console.log(error);
    }
    console.log(data.toString('hex', 0, 8));
  });
}

read();

process.nextTick(function() {
 console.log('inside next tick');
})
