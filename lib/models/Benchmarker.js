'use strict'
let ConsoleWriter = require('./ConsoleWriter.js');
let FileWriter = require('./FileWriter.js');

class Benchmarker {
  toMs(sec, ns) {
    let ms = ((sec * 1000) + (ns / 1000000)).toFixed(2);

    return ms;
  }

  startBench(benchName, callback) {
    if (typeof benchName === 'string') {
      let startTime = process.hrtime();

      return [benchName, startTime];

    } else {
      return new Error('Incorrect args passed to function startBench().')
    }
  }

  // Accepts benchmark data, calculates elapsed time, optionally logs it.
  endBench(benchmark, saveable, callback) {
    callback == 'function' ? callback : callback = new Function();

    if (benchmark.constructor === Array) {
      let endTime = process.hrtime(benchmark[1]),
        resInSeconds = endTime[0],
        resInNanosec = endTime[1];

      let benchmarkResult = this.toMs(resInSeconds, resInNanosec),
        formattedResult = benchmarkResult + 'ms',
        benchmarkName = benchmark[0];

      if (saveable) {
        // Write to file/DB
        FileWriter.writeToLog(benchmarkName, formattedResult,
          function onLogWrite(err, res) {
            callback(err, res);
          });

      } else {
        ConsoleWriter.print(benchmarkName, formattedResult,
          function onStdOut(err, res) {
            callback(err, res);
          });
      }

    } else {
      callback(new Error('Incorrect args passed to function endBench().'));
    }
  }
}

module.exports = new Benchmarker();
