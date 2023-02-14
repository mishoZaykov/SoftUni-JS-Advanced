const rgbToHexColor = require('./6. RGB to Hex');
const { assert } = require('chai');

describe('RGB To HexColor tests', ()=>{
  it('Should convert to black', ()=>{
    assert.equal(rgbToHexColor(0,0,0), '#000000');
  });
  it('Should convert to white', ()=>{
    assert.equal(rgbToHexColor(255,255,255), '#FFFFFF');
  });
  it('Should convert to light blue', ()=>{
    assert.equal(rgbToHexColor(100,149,237), '#6495ED');
  });
  it('Shold return undefined for missing parameters', ()=>{
    assert.equal(rgbToHexColor(0,0), undefined);
    assert.equal(rgbToHexColor(0), undefined);
    assert.equal(rgbToHexColor(), undefined);
  })
  it('Should return undefined for negative parameters', ()=>{
    assert.equal(rgbToHexColor(-1,0,0), undefined);
    assert.equal(rgbToHexColor(0,-1,0), undefined);
    assert.equal(rgbToHexColor(0,0,-1), undefined);
  });
  it('Should return undefined for bigger than 255 parameters', ()=>{
    assert.equal(rgbToHexColor(256,0,0), undefined);
    assert.equal(rgbToHexColor(0,256,0), undefined);
    assert.equal(rgbToHexColor(0,0,256), undefined);
  });
  it('Should return undefined for float numbers', ()=>{
    assert.equal(rgbToHexColor(1.1,0,0), undefined);
    assert.equal(rgbToHexColor(0,1.1,0), undefined);
    assert.equal(rgbToHexColor(0,0,1.1), undefined);
  });
  it('Should return undefined for strings', ()=>{
    assert.equal(rgbToHexColor('a',0,0), undefined);
    assert.equal(rgbToHexColor(0,'a',0), undefined);
    assert.equal(rgbToHexColor(0,0,'a'), undefined);
  });
})