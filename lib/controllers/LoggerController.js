'use strict'
let Logger = require('../models/Logger.js');
let Benchmarker = require('../models/Benchmarker.js');

/*
  Checks if events are configured properly and calls everything needed.
  Working with the module happens only through this class.
*/
class LoggerController {
  logEvent(eventName, callback) {
    /*
      Check if event exists
      Check if event log file exists
      Format event
      Save event to DB
    */
  }

  saveEvent(eventName, fileName, callback) {
    // Writes event to file/DB
  }

  checkEventExists(eventName, callback) {
    // Checks in CONFIG.js if event is defined
    // Returns bool
  }

  checkLogFileExists(fileName, callback) {
    // Checks in CONFIG.js if event is defined
    // Returns bool
  }

}

module.exports = new LoggerController();
