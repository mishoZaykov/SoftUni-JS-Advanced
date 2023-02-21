const PaymentPackage = require('./12. Payment Package');
const { expect } = require('chai');

describe('Payment Package class tests', ()=>{
  it('constructor', ()=>{
    let pp = new PaymentPackage('Name', 100);

    expect(pp.name).to.equal('Name');
    expect(pp.value).to.equal(100);
    expect(pp.VAT).to.equal(20);
    expect(pp.active).to.equal(true);
  });
  
  describe('constructor tests', ()=>{
    it('Shoud throw error when name is not a string', ()=>{
      expect(() => new PaymentPackage(123,123)).to.throw(Error);
    });
    it('Shoud throw error when value is not a number', ()=>{
      expect(() => new PaymentPackage('abc','abc')).to.throw(Error);
    });
    it('Shoud throw error when name is not a string and value is not a number', ()=>{
      expect(() => new PaymentPackage(123,'abc')).to.throw(Error);
    });
    it('Shoud throw error when name is an empty string ', ()=>{
      expect(() => new PaymentPackage('',123)).to.throw(Error);
    });
    it('Shoud throw error when value is negative number', ()=>{
      expect(() => new PaymentPackage('ads',-123)).to.throw(Error);
    });
    it('Shoud throw error when value is negative number and name is an empty string', ()=>{
      expect(() => new PaymentPackage('',-123)).to.throw(Error);
    });
    it('Shoud return correct value', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(pp.name).to.equal('abc');
    });
    it('Shoud return correct value', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(pp.value).to.equal(123);
    });
    it('Shoud return correct value if it is set to 0', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(pp.value = 0).to.equal(0);
    });
  });

  describe('name tests', ()=>{
    it('Shoud throw error when name is number', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(() => (pp.name = 1)).to.throw(Error);
    });
    it('Shoud throw error when name is empty string ', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(() => (pp.name = '')).to.throw(Error);
    });
    it('Should return correct new name ', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(pp.name = 'asd').to.equal('asd');
    });
  });

  describe('value tests', ()=>{
    it('Shoud throw error when value is string ', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(() => (pp.value = 'abc')).to.throw(Error);
    });
    it('Shoud throw error when value is negative number ', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(() => (pp.value = -1)).to.throw(Error);
    });
    it('Should return correct new value ', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(pp.value = 321).to.equal(321);
    });
  });

  describe('VAT tests', ()=>{
    it('Shoud throw error when VAT is string ', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(() => (pp.VAT = 'abc')).to.throw(Error);
    });
    it('Shoud throw error when VAT is a negative number ', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(() => (pp.VAT = -1)).to.throw(Error);
    });
    it('Should return correct new VAT ', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(pp.VAT = 321).to.equal(321);
    });
    it('Should return correct new VAT with 0', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(pp.VAT = 0).to.equal(0);
    });
  });

  describe('active tests', ()=>{
    it('Shoud throw error when active is not a boolean ', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(() => (pp.active = 'abc')).to.throw(Error);
    });
    it('Shoud throw error when active is not a boolean ', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(() => (pp.active = 1)).to.throw(Error);
    });
    it('Should return correct when active is boolean', ()=>{
      pp = new PaymentPackage('abc',123);
      expect(pp.active = true).to.equal(true);
    });
  });

  describe('Tests for toString method',()=>{
    it('Should return a string as all the input is correct', ()=>{
      let flagClass = new PaymentPackage('abc', 123);
      let output = [
        `Package: abc`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 20%): 147.6`,
      ];
      expect(flagClass.toString()).to.equal(output.join('\n'));
    });

    it('Should return a string as all the input is correct', ()=>{
      let flagClass = new PaymentPackage('abc', 123);
      flagClass.VAT = 30;
      let output = [
        `Package: abc`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 30%): 159.9`,
      ];
      expect(flagClass.toString()).to.equal(output.join('\n'));
    });

    it('Should return a string as all the input is correct', ()=>{
      let flagClass = new PaymentPackage('abc', 123);
      flagClass.active = false;
      let output = [
        `Package: abc (inactive)`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 20%): 147.6`,
      ];
      expect(flagClass.toString()).to.equal(output.join('\n'));
    });

    it('Should return a string as all the input is correct', ()=>{
      let flagClass = new PaymentPackage('abc', 123);
      flagClass.active = false;
      flagClass.VAT = 30;
      let output = [
        `Package: abc (inactive)`,
        `- Value (excl. VAT): 123`,
        `- Value (VAT 30%): 159.9`,
      ];
      expect(flagClass.toString()).to.equal(output.join('\n'));
    });
  });
});