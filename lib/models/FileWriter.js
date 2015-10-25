'use strict'
let fs = require('fs');
let EventList = require('../../CONFIG.js');

class FileWriter {
  checkArgs(eventName, data, callback) {
    let eventNameIsString = (typeof eventName === 'string');
    let dataIsString = (typeof data === 'string');
    let callbackIsFunction = (typeof callback === 'function');

    return (eventNameIsString && dataIsString && callbackIsFunction);
  }

  checkEventExists(eventName, callback) {
    let event;
    let eventLogFile;
    let eventExists = false;

    for(event of EventList.keys()) {
    if (eventName == event) {
      eventExists = true;
      eventLogFile = EventList.get(event);
    }
    }

    if (eventExists) {
      callback(null, eventLogFile);
    } else {
      callback(new Error(`No event ${eventName} defined`), null);
    }
  }

  writeToLog(eventName, data, callback) {
    if (this.checkArgs(eventName, data, callback)) {

      this.checkEventExists(eventName, function onEventExists(err, fileName) {

        if (!err && fileName) {

          fs.appendFile(fileName, data + '\n', function onLogWrite(err) {
            console.log(err);
          });

        } else {
          callback(err, null);
        }
      });
    }
  }
}
//
// let f = new FileWriter();
// f.writeToLog('GET', 'TEST DATA', (err, res) => {
//   console.log(err, res)
// });

module.exports = new FileWriter();
