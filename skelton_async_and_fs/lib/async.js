const fs = require("fs");
const EE = require("events");

var ee = new EE;
var orderArray = [];

fs.readFile("one.txt", (err, data1) => {
  console.log(data1.toString("hex", 0, 8));
  orderArray.push(1);
  ee.emit("One:done", data1);
});
ee.on("One:done", (data1) => {
  fs.readFile("two.txt", (err, data2) => {
    console.log(data2.toString("hex", 0, 8));
    orderArray.push(2);
    ee.emit("Two:done", data2);
  });});
ee.on("Two:done", (data2) => {
  fs.readFile("three.txt", (err, data3) => {
    console.log(data3.toString("hex", 0, 8));
    orderArray.push(3);
    console.log(orderArray);
    ee.emit("Three:done", data3);
  });
});
  module.exports = orderArray;
