'use strict'
let Logger = require('./lib/models/Logger.js');
let Benchmarker = require('./lib/models/Benchmarker.js');

module.exports = {
  logEvent: Logger.logEvent,
  startBench: Benchmarker.startBench,
  endBench: Benchmarker.endBench
};
