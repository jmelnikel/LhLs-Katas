const { assert } = require('chai');
const check = require('./kata30');

describe('#Kata30', () => {
  it('should return true for 79927398713', () => {
    assert.isTrue(check(79927398713));
  });
  it('should return false for 79927398711', () => {
    assert.isFalse(check(79927398711));
  });
  it('should return false for 79927398715', () => {
    assert.isFalse(check(79927398715));
  });
  it('should return false for 79927398718', () => {
    assert.isFalse(check(79927398718));
  });
});