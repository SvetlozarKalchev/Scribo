'use strict'
let Logger = require('./lib/models/Logger.js');
let Benchmarker = require('./lib/models/Benchmarker.js');

module.exports = {
  Logger: Logger,
  logEvent: Logger.logEvent.bind(Logger),
  startBench: Benchmarker.startBench.bind(Benchmarker),
  endBench: Benchmarker.endBench.bind(Benchmarker)
};
