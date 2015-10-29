'use strict'
let fs = require('fs');
let ConsoleWriter = require('./ConsoleWriter.js');
let FileWriter = require('./FileWriter.js');

class Logger {
  checkArgs(eventName, message, saveable, callback) {
    let eventNameIsString = (typeof eventName === 'string');
    let messageIsString = (typeof message === 'string');
    let propertiesAreBool = (typeof saveable === 'boolean');
    let callbackIsFunction = (typeof callback === 'function');

    return (eventNameIsString && messageIsString && propertiesAreBool && callbackIsFunction);
  }

  logEvent(eventName, message, saveable, callback) {
    (typeof callback === 'function') ? callback : callback = new Function();

    if (this.checkArgs(eventName, message, saveable, callback)) {

      ConsoleWriter.print(eventName, message, function onSTDOUT(err, logMessage) {
        if (err) {
          callback(err, logMessage);

        } else if (saveable) {

          FileWriter.writeToLog(eventName, logMessage, function onLogWrite(err, res) {
            callback(err, res);
          });
        }
      });
    } else {
      callback(new Error('Incorrect args passed.'));
    }
  }
}

module.exports = new Logger();
