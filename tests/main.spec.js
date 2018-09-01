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

    it('Should return description btc-converter --help', (done) => {
        exec(`${btcConverter} --help`, (err, stdout, stderr) => {
            if (err) throw err;
            expect(stdout.includes('Convert Bitcoin to any currency defined.')).to.be.true;
            done();
        });
    });
})
