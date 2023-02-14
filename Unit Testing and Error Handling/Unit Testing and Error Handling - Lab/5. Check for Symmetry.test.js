const { assert } = require('chai');
const checkForSymmetry = require('./5. Check for Symmetry');

describe('Check for symmetry', () =>{

  it('Should return true if the input array is symmetric', ()=>{
    assert(checkForSymmetry([1,2,2,1]) === true);
  });
  it('Should return true if the input array is odd numbers', ()=>{
    assert(checkForSymmetry([1,2,1])=== true);
  });
  it('Should return true if the input array is symmetric strings', ()=>{
    assert(checkForSymmetry(['a','b','b','a'])=== true);
  });
  it('Should return false if it is string', ()=>{
    assert(checkForSymmetry('dafaa')=== false);
  });
  it('Should return false if it is a number', ()=>{
    assert(checkForSymmetry(10)=== false);
  });
  it('Should return false if the input array is not symmetric', ()=>{
    assert(checkForSymmetry([1,2,3,4,5])=== false);
  });
  it('Should return false if the inputs are different type', ()=>{
    assert(checkForSymmetry([1,2,3,'4'])=== false);
  });
});