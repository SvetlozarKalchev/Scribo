'use strict'
let fs = require('fs');
let ConsoleWriter = require('./ConsoleWriter.js');

class Logger {
  checkArgs(eventName, message, saveable, callback) {
    let eventNameIsString = (typeof eventName === 'string');

    let messageIsString = false;
    if (message) {
      messageIsString = (typeof message === 'string');
    }

    let propertiesAreBool = (typeof saveable === 'boolean');
    let callbackIsFunction = (typeof callback === 'function');

    return (eventNameIsString && messageIsString && propertiesAreBool && callbackIsFunction);
  }

  logEvent(eventName, message, saveable, callback) {
    if (this.checkArgs(eventName, message, saveable, callback)) {

      ConsoleWriter.print(eventName, message, function onSTDOUT(err, res) {
        if (err) {
          callback(err, res);
        } else if (saveable) {
          // Save log message to file
        }
      });
    } else {
      callback(new Error('Incorrect args passed.'));
    }
  }

}
//
// let Log = new Logger();
//
// Log.logEvent('GET Request', 'from this IP', true, (err, res) => {
// })
module.exports = new Logger();
