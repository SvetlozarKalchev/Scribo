'use strict'

class ConsoleWriter {
  checkArgs(eventName, message, callback) {
    let eventNameIsString = (typeof eventName === 'string');
    let messageIsString = (typeof message === 'string');
    let callbackIsFunction = (typeof callback === 'function');

    return (eventNameIsString && messageIsString && callbackIsFunction);
  }

  print(eventName, message, callback) {
    if (this.checkArgs(eventName, message, callback)) {
      let currentTime = new Date().toUTCString();

      let logTemplate = `${currentTime} | ${eventName} : ${message}`;

      console.log(logTemplate);

      callback(null, logTemplate)
    } else {
      callback(new Error('Invalid args passed!'), false);
    }
  }
}

module.exports = new ConsoleWriter();
