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
