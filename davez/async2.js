
const EE = require('events');
const fs = require('fs');
const ee = new EE();

const dataArray = [];
const filesLoaded = 0;

function checkAllLoaded() {
  filesLoaded += 1;
  if(filesLoaded == 3) {
    console.log(dataArray);
  }
}

process.nextTick(() => {
  fs.readFile('one.txt', (err, data) => {
    if (err) return console.log(err);

    console.log('first file ' + data.toString('hex',0,8));
    dataArray.push(data.toString('hex',0,8));
    checkAllLoaded();
    ee.emit('one:done', data);
  });
});
process.nextTick(() => {
  ee.on('one:done', (data) => {
    fs.readFile('two.txt', (err, data) => {
      if (err) return console.log(err);

      console.log('second file ' + data.toString('hex',0,8));
      dataArray.push(data.toString('hex',0,8));
      checkAllLoaded();
      ee.emit('two:done', data);
    });
  });
});
process.nextTick(() => {
  ee.on('two:done', (data) => {
    fs.readFile('three.txt', (err, data) => {
      if (err) return console.log(err);

      console.log('third file ' + data.toString('hex',0,8));
      dataArray.push(data.toString('hex',0,8));
      checkAllLoaded();
      ee.emit('three:done', data);
    });
  });
});
