const fs = require("fs");

module.exports = exports = {
  counter: 0,
  readArray: [null, null, null],
  printArray: [],

  readFile: function (index, file) {
    fs.readFile(file, function (err, data) {
      var hex;

      if (err) {
        return console.log(err);
      }

      hex = data.toString("hex", 0, 8);
      this.readArray[index] = hex;
      this.counter++;

      if (this.counter === 3) {
        this.printArray = this.readArray.reverse().join(", ");
        console.log(this.printArray);
      }

      return hex;
    }.bind(this));
  },

  readMyFiles: function () {
    var file;
    var filesArray = ["three.txt", "two.txt", "one.txt"];

    for (var i = 2; i >= 0; i--) {
      file = filesArray.pop();

      this.readFile(i, file);
    }
  }
};
