const chai = require('chai');

const expect = chai.expect;

const convertDBC = require('../src/ConvertBTC');

describe('ConvertBTC', () => {
  it('Should return USD as currency and 1 as amount default', () => {
    expect(convertDBC()).to.be.equal('1 BTC to USD = 2000.00');
  });

  it('Should return BRL as currency and 10 as amount default', () => {
    expect(convertDBC('BRL', 10)).to.be.equal('10 BTC to BRL = 2000.00');
  });
});
