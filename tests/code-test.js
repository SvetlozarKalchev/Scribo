'use strict'
let Logger = require('../lib/models/Logger.js');
let Benchmarker = require('../lib/models/Benchmarker.js');

let dbBench = Benchmarker.startBench('Operations');

// for (let i = 0; i < 1; i++) {
//   // var obj = new Object(Array);
//   //var obj = new Array();
//   // var obj = Object.create(Array);
//   // var obj = [];
//
// }

//console.log(end);
// let b = Benchmarker.startBench('Benchmark creation');
// Benchmarker.endBench(b, false, (err, ms) => {
//   //console.log('Finished in: ', ms);
// })

Benchmarker.endBench(dbBench, true, (err, ms) => {
  //console.log('Operation finished in: ', ms, 'ms.');
});

let b = process.hrtime();
let end = process.hrtime(b);
console.log(end[1] / 1000000);
