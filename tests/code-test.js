'use strict'
let Logger = require('../lib/models/Logger.js');

let dbBench = Logger.startBench('DB Write');

console.log('Started clock at: ' + dbBench);

for (let i = 0; i < 1000000; i++) {
  let arr = [];
  arr.push(i)
}

Logger.endBench(dbBench, false, (err, ms) => {
  console.log('Operation finished in: ', ms, 'ms.');
});
