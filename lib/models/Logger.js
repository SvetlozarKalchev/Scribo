'use strict'
let fs = require('fs');

class Logger {
  logEvent(eventName, callback) {
    if (typeof eventName === 'string' && typeof callback === 'function') {
      console.log('Logged ' + eventName);
      // Write to file/DB
      callback(null, true);
    } else {
      callback(new Error('Incorrect args passed.'));
    }
  }

  (eventName, fileName, callback) {}
}

module.exports = new Logger();
