const fs = require('fs');
const events = require('events');
const myEvent = new events();
module.exports = myEvent;

myEvent.on('first', function(){
  console.log('text from one.txt:');
  fs.readFile('textFiles/one.txt', function(error, data){
    if(error){
      return console.log(error);
    }
    myEvent.emit('firstDone', data);
  });
});

myEvent.on('firstDone', function(data){
  console.log(data.toString('hex', 0, 7));
  console.log('text from two.txt:');
  fs.readFile('textFiles/two.txt', function(error, data){
    if(error){
      return console.log(error);
    }
    myEvent.emit('secondDone', data);
  });
});

myEvent.on('secondDone', function(data){
  console.log(data.toString('hex', 0, 7));
  console.log('text from three.txt:');
  fs.readFile('textFiles/three.txt', function(error, data){
    if(error){
      return console.log(error);
    }
    myEvent.emit('thirdDone', data);
  });
});

myEvent.on('thirdDone', function(data){
  console.log(data.toString('hex', 0, 7));
});
