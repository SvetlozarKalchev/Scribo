'use strict'
let Chai = require('chai');
let assert = Chai.assert;
let expect = Chai.expect;
let should = Chai.should();

let Benchmarker = require('../lib/models/Benchmarker.js');

// Arguments to plug in the class methods.

describe('class Benchmarker', () => {
  // let error, result;
  // let bench = Benchmarker.startBench('Test');
  //
  // Benchmarker.endBench(bench, false, (err, res) => {
  //   error = err;
  //   result = res;
  // });

  describe('.toMS()', () => {
    it('should return string result when args are correct', (done) => {
      assert.isString(Benchmarker.toMs(123, 123456));
      done();
    });
  });

  describe('.startBench()', () => {
    it('should return no error and an array when args are correct', (done) => {
      assert.isArray(Benchmarker.startBench('CorrectArg'));
      done();
    });

    it('should return an error when args are wrong', (done) => {
      expect(Benchmarker.startBench(1)).to.have.property('message');
      done();
    });

  });

  describe('endBench()', () => {
    it('should return no error and a string result when saveable is set to false', () => {
    });

  });

});
