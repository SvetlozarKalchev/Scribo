'use strict'
let Chai = require('chai');
let expect = Chai.expect;
let should = Chai.should();

describe('check directory for needed files', () => {
  it('/ should have app.js', () => {
    should.exist(require('../app.js'));
  });

  it('/lib/controllers should have LoggerController.js', () => {
    should.exist(require('../lib/controllers/LoggerController.js'));
  });

  it('/lib/models should have Benchmarker.js', () => {
    should.exist(require('../lib/models/Benchmarker.js'));
  });

  it('/lib/models should have FileWriter.js', () => {
    should.exist(require('../lib/models/FileWriter.js'));
  });

  it('/lib/models should have Logger.js', () => {
    should.exist(require('../lib/models/Logger.js'));
  });


})
