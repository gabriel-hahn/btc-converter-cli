const expect = require('chai').expect;
const exec = require('child_process').exec;
const pkg = require('../package.json');

const btcConverter = './src/main.js';

describe('Main CLI', () => {
  it('Should return version of btc-converter-cli', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('Should return the description when btc-converter-cli --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('Convert Bitcoin to any currency defined.')).to.be.true;
      done();
    });
  });

  it('Should return the currency option when btc-converter-cli --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('Should return the amount option when btc-converter-cli --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });
});
