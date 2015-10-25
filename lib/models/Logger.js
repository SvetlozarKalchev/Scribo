'use strict'
let fs = require('fs');
let ConsoleWriter = require('./ConsoleWriter.js');
let FileWriter = require('./FileWriter.js');

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

      ConsoleWriter.print(eventName, message, function onSTDOUT(err, logMessage) {
        if (err) {
          callback(err, logMessage);

        } else if (saveable) {

          FileWriter.writeToLog(eventName, logMessage, function onLogWrite(err) {
            callback(err);
          });
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
// Log.logEvent('GET', 'from this IP', true, (err, res) => {
// });

module.exports = new Logger();
