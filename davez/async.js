

const fs = require('fs');

const dataArray = [];

process.nextTick(() => {
  fs.readFile('one.txt', (err, data) => {
    console.log('first file: ' + data.toString('hex',0,8));
    dataArray.push(data.toString('hex',0,8));
  });
  process.nextTick(() => {
    fs.readFile('two.txt', (err, data) => {
      console.log('second file: ' + data.toString('hex',0,8));
      dataArray.push(data.toString('hex',0,8));
    });
    process.nextTick(() => {
      fs.readFile('three.txt', (err, data) => {
        console.log('third file: ' + data.toString('hex',0,8));
        dataArray.push(data.toString('hex',0,8));
      });
    });
  });
});
