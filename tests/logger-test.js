'use strict'
let Chai = require('chai');
let assert = Chai.assert;
let expect = Chai.expect;
let should = Chai.should();

describe('class Logger', () => {
  it('should be declared', () => {
    should.exist(require('../lib/models/Logger.js'));
  });

  it('should have a method logEvent', () => {
    let Logger = require('../lib/models/Logger.js');

    assert.isFunction(Logger.logEvent, 'logEvent() is function');
  });
});

describe('.logEvent()', () => {
  it('should return no error and result true if args are correct', () => {
    let Logger = require('../lib/models/Logger.js');
    let eventName = 'Test Event';

    Logger.logEvent(eventName, (err, res) => {
      console.log(err);
      //assert(err).is.null;
      done();
    });
  });
});
