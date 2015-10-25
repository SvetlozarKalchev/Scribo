'use strict'
let fs = require('fs');
let EventList = require('../../CONFIG.js');

class FileWriter {
  checkArgs() {}

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

  onEventCheck(err, res) {
    fs.appendFile(res, function onLogWrite(err, res) {
      console.log(err, res);
    })
  }

  writeToLog(eventName, data, callback) {
    this.checkEventExists(eventName, function onEventExists(err, fileName) {
      if (!err && fileName) {
        fs.appendFile(fileName, data + '\n', function onLogWrite(err, res) {
          console.log(err, res);
        })
      } else {
        callback(err, null);
      }
    });
  }
}

let f = new FileWriter();
f.writeToLog('GET', 'TEST DATA', (err, res) => {
  console.log(err, res)
});

module.exports = new FileWriter();
