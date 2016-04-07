const fs = require('fs');

var app = module.exports = {}

app.hexified = (data) => {
  return data.toString('hex', 0, 8);
};

app.answer = [];

app.readOne = function() {

  fs.readFile('one.txt', (err, data) => {
    if (err) return console.log(err);

    this.answer.push(app.hexified(data));
    app.readTwo();
  });
};

app.readTwo = function() {
  fs.readFile('two.txt', (err, data) => {
    if (err) return console.log(err);

    this.answer.push(app.hexified(data));
    app.readThree();
  });
};

app.readThree = function() {
  fs.readFile('three.txt', (err, data) => {
    if (err) return console.log(err);

    this.answer.push(app.hexified(data));
    console.log(this.answer[0],this.answer[1],this.answer[2]);
  });
};

app.readOne();
