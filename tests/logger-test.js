'use strict'
let Chai = require('chai');
let assert = Chai.assert;
let expect = Chai.expect;
let should = Chai.should();

let Logger = require('../lib/models/Logger.js');

// Arguments that are passed to the functions in the tests
let eventName = 'Test Event',
  message = 'Test message',
  saveable = false,
  callback = (err, res) => {
    should.not.exist(err);
    should.exist(res);
  };

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

    it('should return true if all args are present and correct', (done) => {
      assert.isTrue(Logger.checkArgs(eventName, message, saveable, (err, res) => {
      }));
      done();
    });

    it('should return true if message is empty, but the other args are correct', (done) => {
      assert.isTrue(Logger.checkArgs(eventName, ' ', saveable, (err, res) => {
      }));
      done();
    });

    it('should return false if args are incorrect', (done) => {
      assert.isFalse(Logger.checkArgs(1, 1, 1, 1));
      done();
    })
  });

  describe('.logEvent()', () => {
    it('should return no error and result string if args are correct', () => {
      Logger.logEvent(eventName, message, saveable, (err, result) => {
        expect(err).to.be.a('null');
        expect(result).to.be.a('string');
      });
    });
  });

});
