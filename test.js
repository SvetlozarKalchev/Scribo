var Scribo = require('./index.js');

var b = Scribo.startBench('db');

Scribo.endBench(b, (err, res) => {
  console.log(err, res)
})
