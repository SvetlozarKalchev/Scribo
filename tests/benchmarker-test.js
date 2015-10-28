'use strict'
let Chai = require('chai');
let assert = Chai.assert;
let expect = Chai.expect;
let should = Chai.should();

let Benchmarker = require('../lib/models/Benchmarker.js');

// Arguments to plug in the class methods.

describe('class Benchmarker', () => {

  describe('.toMS()', () => {
    it('should return no error and int result when args are correct', (done) => {
      Benchmarker.toMs(10, 123456, (err, result) => {
        expect(err).to.be.a('null');
        expect(result).to.be.a('string');
      });
      done();
    });
  });

  describe('.startBench()', () => {
    it('should return no error and an array when args are correct', (done) => {
      Benchmarker.startBench('Test Bench', (err, result) => {
        expect(err).to.be.a('null');
        expect(result).to.be.an('array');
      });
      done();
    });
  });


});
