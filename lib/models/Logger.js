'use strict'
/*
  logEvent() {
    1. Write event+metadata to a file
}
*/
class Logger {
  constructor() {}

  checkEventExists(eventName, callback) {
    // Checks in CONFIG.js if event is defined
    // Returns bool
  }

  checkLogFileExists(fileName, callback) {
    // Checks in CONFIG.js if event is defined
    // Returns bool
  }

  logEvent(eventName, callback) {
    typeof callback === 'function' ? true : callback = new Function();

    if (typeof eventName === 'string') {
      console.log('Logged ' + eventName);

      callback(null, true);
    } else {
      callback(new Error('Incorrect args passed.'));
    }
  }

  startBench(eventName) {
    // Starts clock on certain event
    if (typeof eventName == 'string') {
      let startTime = process.hrtime();

      return [eventName, startTime];
    } else {
      throw new Error('Incorrect args passed.')
    }
  }

  endBench(benchmark, shouldLog, callback) {
    // Accepts benchmark data and calculates elapsed time
    // Then optionally logs it

  }

}

let Log = new Logger();

let dbBench = Log.startBench('test');
console.log(dbBench);


module.exports = new Logger();
