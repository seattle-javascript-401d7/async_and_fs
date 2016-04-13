const FileParser = module.exports = require(__dirname + "/lib/async");

var files = [__dirname + "/files/one.txt",
             __dirname + "/files/two.txt",
             __dirname + "/files/three.txt"];
var fp = new FileParser(files, () => {});

fp.start();
