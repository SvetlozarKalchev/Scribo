'use strict'
let Chai = require('chai');
let expect = Chai.expect;
let should = Chai.should();

describe('File check', () => {
  it('/ should have index.js', (done) => {
    should.exist(require('../index.js'));
    done();
  });

  it('/ should have EVENTS.js', (done) => {
    should.exist(require('../EVENTS.js'));
    done();
  });

  it('/lib/models should have Benchmarker.js', (done) => {
    should.exist(require('../lib/models/Benchmarker.js'));
    done();
  });

  it('/lib/models should have ConsoleWriter.js', (done) => {
    should.exist(require('../lib/models/ConsoleWriter.js'));
    done();
  });

  it('/lib/models should have FileWriter.js', (done) => {
    should.exist(require('../lib/models/FileWriter.js'));
    done();
  });

  it('/lib/models should have Logger.js', (done) => {
    should.exist(require('../lib/models/Logger.js'));
    done();
  });

});
