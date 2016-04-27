const fs = require('fs');
const Events = require('events');
const myEvent = new Events();
module.exports = myEvent;

myEvent.on('first', () => {
  console.log('text from one.txt:');
  fs.readFile('textFiles/one.txt', (error, data) => {
    if (error) return console.log(error);
    myEvent.emit('firstDone', data);
  });
});

myEvent.on('firstDone', (data) => {
  console.log(data.toString('utf8', 0, 7));
  console.log('text from two.txt:');
  fs.readFile('textFiles/two.txt', (error, data) => {
    if (error) return console.log(error);
    myEvent.emit('secondDone', data);
  });
});

myEvent.on('secondDone', (data) => {
  console.log(data.toString('utf8', 0, 7));
  console.log('text from three.txt:');
  fs.readFile('textFiles/three.txt', (error, data) => {
    if (error) return console.log(error);
    myEvent.emit('thirdDone', data);
  });
});

myEvent.on('thirdDone', (data) => {
  console.log(data.toString('utf8', 0, 7));
});
