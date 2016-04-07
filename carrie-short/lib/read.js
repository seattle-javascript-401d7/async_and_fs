const fs = require('fs');
const EE = require('events');

const ee = module.exports = new EE();

ee.files = ['three.txt','two.txt','one.txt'];
