'use strict'

class Benchmarker {
  toMs(sec, ns, callback) {
    let ms = ((sec * 1000) + (ns / 1000000)).toFixed(2);

    callback(null, ms);
  }

  startBench(benchName, callback) {
    if (typeof benchName === 'string') {
      let startTime = process.hrtime();

      return [benchName, startTime];
    } else {
      throw new Error('Incorrect args passed.')
    }
  }

  // Accepts benchmark data and calculates elapsed time
  // Then optionally logs it
  endBench(benchmark, saveable, callback) {
    if (benchmark.constructor === Array) {
      let endTime = process.hrtime(benchmark[1]);
      let resInSeconds = endTime[0];
      let resInNanosec = endTime[1];

      this.toMs(resInSeconds, resInNanosec, function onToMsFinish(err, res) {
        if (!err) {
          if (saveable) {
            // Write to file/DB
          } else {
            callback(null, res);
          }
        } else {
          callback(err, res);
        }
      });

    } else {
      throw new Error('Incorrect args passed.')
    }
  }
}
