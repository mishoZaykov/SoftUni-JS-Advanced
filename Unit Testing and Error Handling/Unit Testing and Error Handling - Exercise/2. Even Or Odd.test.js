const isOddOrEven = require('./2. Even Or Odd');
const { assert } = require('chai');

describe('isOddOrEven function tests',() => {
  //invalid input tests
  it('should return undefined if parameter is number', () =>{
      assert.equal(isOddOrEven(10),undefined);
  });
  it('should return undefined if parameter is object', () =>{
    assert.equal(isOddOrEven({}),undefined);
  });
  it('should return undefined if parameter is array', () =>{
    assert.equal(isOddOrEven([]),undefined);
  });
  it('should return undefined if parameter is undefined', () =>{
    assert.equal(isOddOrEven(undefined),undefined);
  });
  it('should return undefined if parameter is null', () =>{
    assert.equal(isOddOrEven(null),undefined);
  });

  //vaid input tests
  it('should return event as result', () =>{
    assert.equal(isOddOrEven('Hi'),'even');
  });
  it('should return odd as result', () =>{
    assert.equal(isOddOrEven('HellO'),'odd');
  });

});