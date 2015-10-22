'use strict'
class Logger {
  checkEventExists(eventName, callback) {
    // Checks in CONFIG.js if event is defined
    // Returns bool
  }

  checkLogFileExists(fileName, callback) {
    // Checks in CONFIG.js if event is defined
    // Returns bool
  }

  // Callback is optional
  logEvent(eventName, callback) {
    typeof callback === 'function' ? true : callback = new Function();

    if (typeof eventName === 'string') {
      console.log('Logged ' + eventName);
      // Write to file/DB
      callback(null, true);
    } else {
      callback(new Error('Incorrect args passed.'));
    }
  }

  // Starts clock on certain event
  startBench(benchName, callback) {
    if (typeof benchName === 'string') {
      let startTime = process.hrtime();

      return [benchName, startTime];
    // callback(null, startTime);
    } else {
      throw new Error('Incorrect args passed.')
    }
  }

  endBench(benchmark, shouldLog, callback) {
    // Accepts benchmark data and calculates elapsed time
    // Then optionally logs it
    console.log('received ' + benchmark)
    if (benchmark.constructor === Array) {
      let endTime = process.hrtime(benchmark[1]);
      console.log('result ' + endTime);
      callback(null, endTime);

    } else {
      throw new Error('Incorrect args passed.')
    }
  }

}

let Log = new Logger();

let dbBench = Log.startBench('DB Write');

console.log('val ' + dbBench);

for (let i = 0; i < 10000000; i++) {
  let arr = [];
  arr.push(i)
}

Log.endBench(dbBench, false, (err, res) => {
  console.log((res[0] * 1000 + res[1] / 1000000).toFixed(2));
});


module.exports = new Logger();
