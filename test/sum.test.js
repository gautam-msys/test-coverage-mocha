const sum = require('../src/sum');
const expect = require('chai').expect;

describe('Testing the Cube Functions', function () {
  it('Sum of two numbers', function (done) {
    expect(sum(1, 2)).be.a('number');
    done();
  });
});
