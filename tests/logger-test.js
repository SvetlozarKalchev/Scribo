'use strict'
let Chai = require('chai');
let assert = Chai.assert;
let expect = Chai.expect;
let should = Chai.should();

describe('class Logger', () => {
  it('class should be declared', () => {
    should.exist(require('../lib/models/Logger.js'));
  });

  it('should have a method logEvent', () => {
    let Logger = require('../lib/models/Logger.js');
    let eventName = 'Test Event'

    assert.isFunction(Logger.logEvent, 'logEvent() is function');
  });
})
