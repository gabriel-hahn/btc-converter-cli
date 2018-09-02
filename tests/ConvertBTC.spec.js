const chai = require('chai');
const chalk = require('chalk');
const nock = require('nock');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const expect = chai.expect;

const convertBTC = require('../src/ConvertBTC');

describe('ConvertBTC', () => {
  let consoleStub;

  const responseMock = 7490.78;

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'info');
  });

  afterEach(() => {
    console.info.restore();
  });

  it('Should use currency USD and 1 as amount default', async () => {
    nock('https://blockchain.info')
      .get('/tobtc')
      .query({ currency: 'USD', value: 1 })
      .reply(200, responseMock);
    await convertBTC();
    expect(consoleStub).to.have.been.calledWith(`1 BTC to ${chalk.red(1)} ${chalk.green('USD')} = ${chalk.yellow(7490.78)}`);
  });

  it('Should use currency USD and 10 as amount default', async () => {
    nock('https://blockchain.info')
      .get('/tobtc')
      .query({ currency: 'USD', value: 10 })
      .reply(200, responseMock);
    await convertBTC('USD', 10);
    expect(consoleStub).to.have.been.calledWith(`1 BTC to ${chalk.red(10)} ${chalk.green('USD')} = ${chalk.yellow(7490.78)}`);
  });

  it('Should use currency BRL and 1 as amount default', async () => {
    nock('https://blockchain.info')
      .get('/tobtc')
      .query({ currency: 'BRL', value: 1 })
      .reply(200, responseMock);
    await convertBTC('BRL');
    expect(consoleStub).to.have.been.calledWith(`1 BTC to ${chalk.red(1)} ${chalk.green('BRL')} = ${chalk.yellow(7490.78)}`);
  });

  it('Should message user when API reply with error', async () => {
    nock('https://blockchain.info')
      .get('/tobtc')
      .query({ currency: 'USD', value: 1 })
      .replyWithError('Error');
    await convertBTC('BRL');
    expect(consoleStub).to.have.been.calledWith(chalk.red('Something went wrong in the API. Try in a few minutes.'));
  });
});
