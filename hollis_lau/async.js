const fs = require("fs");

var filesArray = ["three.txt", "two.txt", "one.txt"];
var file;
var counter = 0;
var printArray = [null, null, null];

function readFile(index) {
  fs.readFile(file, function (err, data) {
    if (err) {
      return console.log(err);
    }
    printArray[index] = data.toString("hex", 0, 8);
    counter++;

    if (counter === 3) {
      console.log(printArray.reverse().join(", "));
    }
  });
}

for (var i = 2; i >= 0; i--) {
  file = filesArray.pop();

  readFile(i);
}
