'use strict'
let Chai = require('chai');
let assert = Chai.assert;
let expect = Chai.expect;
let should = Chai.should();

let Logger = require('../lib/models/Logger.js');

describe('class Logger', () => {
  it('should have a method checkArgs()', (done) => {
    assert.isFunction(Logger.checkArgs);
    done();
  });

  it('should have a method logEvent()', (done) => {
    assert.isFunction(Logger.logEvent, 'logEvent() is function');
    done();
  });

  describe('.checkArgs()', () => {
    it('should return true if args are correct', (done) => {
      assert.isTrue(Logger.checkArgs('Test', 'Test', false, (err, res) => {
      }));
      done();
    });

    it('should return false if args are incorrect', (done) => {
      assert.isFalse(Logger.checkArgs(1, 1, 1, 1));
      done();
    })
  });

  describe('.logEvent()', () => {
    it('should return no error and result true if args are correct', () => {
      let eventName = 'Test Event';
      let message = 'Test message';
      let saveable = false;
      let callback = (err, res) => {
        should.not.exist(err);
        should.exist(err);
      };

      Logger.logEvent(eventName, message, saveable, callback);
    });
  });

});
