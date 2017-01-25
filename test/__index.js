// Dependencies
const expect = require('chai').expect;
const debug = require('../index.js');
require('mocha-sinon');

const chalk = require('chalk');

process.env.DEBUG= true;

describe ('debugutil', (done) => {
  beforeEach(function() {
    this.sinon.stub(console, 'log');
    this.sinon.stub(console, 'error');
    this.sinon.stub(console, 'warn');
  });

  it('test for success has run', (done) => {
    debug.debug('Success Message', 'success');
    expect(console.log.calledOnce).to.be.true;
    done();
  });
  it('test for error has run', (done) => {
    debug.debug('Error Message', 'error')
    expect(console.error.calledOnce).to.be.true;
    done();
  });
  it('test for warn has run', (done) => {
    debug.debug('Warning Message', 'warn')
    expect(console.warn.calledOnce).to.be.true;
    done();
  });
});




/*
// Requires,
const expect = require('chai').expect;
const debugtl = require('../index');


// Tests, starts by calling the API from Models.
describe('debugTool', () => {

  // Test for NOT PRINT
  it('Should test for no print ', (done) => {
    const msg = 'success';
    const status = 'success';
      expect(debugtl.debug(msg, status)).to.be.undefined;
      done();
  });

  // Test for PRINT
  it('Should test for print', (done) => {
    process.env.DEBUG = true;
    const msg = 'success';
    const status = 'success';
      expect(debugtl.debug(msg, status)).to.be.a('string');
      done();
  });
});
*/
