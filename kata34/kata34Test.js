const { assert } = require('chai');
const encrypt = require('./kata34');

describe("caesar.encrypt", () => {
  it("encrypts a single letter with a left shift of 3", () => {
    assert.equal(encrypt("e", -3), "b");
  });
  it("characters should wrap around the alphabet", () => {
    assert.equal(encrypt("b", -3), "y");
  });
  it('encrypts the string "hello" to "ebiil" with a left shift of 3', () => {
    assert.equal(encrypt("hello", -3), "ebiil");
  });
  it('encrypts a sentence "hello world" => "mjqqt btwqi", skips spaces (right shift of 5)', () => {
    assert.equal(encrypt("hello world", 5), "mjqqt btwqi");
  });
});