const createCalculator = require('./7. Add  Subtract');
const { assert } = require('chai');

describe('Create Calculator tests',()=>{
  it('Should return type of funtion to be object', ()=>{
    assert.equal(typeof createCalculator(), 'object');
  })
  it('Should return object, that has property add', ()=>{
    assert.equal(typeof createCalculator().add, 'function');
  })
  it('Should return object, that has property subtact', ()=>{
    assert.equal(typeof createCalculator().subtract, 'function');
  })
  it('Should return object, that has property get', ()=>{
    assert.equal(typeof createCalculator().get, 'function');
  })
  it('Internal sum can\'t be modified from the otside', ()=>{
    assert.equal(createCalculator().value, undefined);
  })
  it('Should test add function with input 1', ()=>{
    const calc = createCalculator();
    calc.add('1');
    assert.equal(calc.get(), 1);
  })
  it('Should test add and subtract funtion', ()=>{
    const calc = createCalculator();
    calc.add('2');
    calc.subtract('1');
    assert.equal(calc.get(), 1);
  }) 
});