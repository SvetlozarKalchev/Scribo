'use strict'
let Chai = require('chai');
let expect = Chai.expect;
let should = Chai.should();

describe('File check', () => {
  it('/ should have app.js', (done) => {
    should.exist(require('../app.js'));
    done();
  });

  it('/lib/controllers should have LoggerController.js', (done) => {
    should.exist(require('../lib/controllers/LoggerController.js'));
    done();
  });

  it('/lib/models should have Benchmarker.js', (done) => {
    should.exist(require('../lib/models/Benchmarker.js'));
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
