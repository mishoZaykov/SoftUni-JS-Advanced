let motorcycleRider = require("./Motorcycle Rider");
const { assert, expect } = require("chai");

describe("Motorcycle Rider tests", () =>{
  describe("licenseRestriction tests", () =>{
      it("valid input - category AM", () =>{
        expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
      });
      it("valid input - category A1", () =>{
        expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
      });
      it("valid input - category A2", () =>{
        expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
      });
      it("valid input - category A", () =>{
        expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
      });
      it('invalid input - category is not correct', ()=>{
        expect(()=> motorcycleRider.licenseRestriction('Z')).to.throw('Invalid Information!')
      });
      it('invalid input - category is not of correct type', ()=>{
        expect(()=> motorcycleRider.licenseRestriction(1)).to.throw('Invalid Information!')
      });
   });

   describe('motorcycleShowroom tests', () =>{
    it('invalid input - engineVolume is not empty array, but maximumEngineVolume is not a number', ()=>{
      expect(()=> motorcycleRider.motorcycleShowroom(["125", "250", "600"], 'asd') ).to.throw('Invalid Information!');
    });
    it('invalid input - engineVolume is not an array, but maximumEngineVolume is a number', ()=>{
      expect(()=> motorcycleRider.motorcycleShowroom("600", 1) ).to.throw('Invalid Information!');
    });
    it('invalid input - engineVolume is an array, but maximumEngineVolume is negative number', ()=>{
      expect(()=> motorcycleRider.motorcycleShowroom(["600"], -1) ).to.throw('Invalid Information!');
    });
    it('invalid input - engineVolume is not an array and maximumEngineVolume is not a number', ()=>{
      expect(()=> motorcycleRider.motorcycleShowroom("600", '1') ).to.throw('Invalid Information!');
    });
    it('invalid input - engineVolume is an empty array and maximumEngineVolume is less than 50', ()=>{
      expect(()=> motorcycleRider.motorcycleShowroom([], 49)).to.throw('Invalid Information!');
    });
    it("valid input - there should be 1 available motorcycle", () =>{
      expect(motorcycleRider.motorcycleShowroom(['50'], 50)).to.equal('There are 1 available motorcycles matching your criteria!')
    });
    it("valid input - there should be 2 available motorcycle", () =>{
      expect(motorcycleRider.motorcycleShowroom(['50','200','100'], 150)).to.equal('There are 2 available motorcycles matching your criteria!')
    });
    it("valid input - there should be 3 available motorcycle", () =>{
      expect(motorcycleRider.motorcycleShowroom(['50','200','fifty', -30, '400'], 500)).to.equal('There are 3 available motorcycles matching your criteria!')
    });
    it("valid input - there should be 0 available motorcycle", () =>{
      expect(motorcycleRider.motorcycleShowroom(['0'], 50)).to.equal('There are 0 available motorcycles matching your criteria!')
    });
    it("valid input - there should be 5 available motorcycle", () =>{
      expect(motorcycleRider.motorcycleShowroom([100,200,300,'five',400,500], 1000)).to.equal('There are 5 available motorcycles matching your criteria!')
    });
   });
   describe('otherSpendings tests', ()=>{
    it('invalid input - all arguments are not correct type', ()=>{
      expect(()=> motorcycleRider.otherSpendings('array', 2, [])).to.throw('Invalid Information!');
    });
    it('invalid input - first arguments is not correct type', ()=>{
      expect(()=> motorcycleRider.otherSpendings('array', ['daf', '32'], true)).to.throw('Invalid Information!');
    });
    it('invalid input - second arguments is not correct type', ()=>{
      expect(()=> motorcycleRider.otherSpendings(['daf', '32'], 2, true)).to.throw('Invalid Information!');
    });
    it('invalid input - third arguments is not correct type', ()=>{
      expect(()=> motorcycleRider.otherSpendings(['daf', '32'], ['daf', '34', 'ada'], 12)).to.throw('Invalid Information!');
    });
    it("valid input - price with discount and both equipments", () =>{
      expect(motorcycleRider.otherSpendings(['helmet','jacked'],[], true)).to.equal('You spend $450.00 for equipment and consumables with 10% discount!')
    });
    it("valid input - price without discount and both equipments", () =>{
      expect(motorcycleRider.otherSpendings(['helmet','jacked'],[], false)).to.equal('You spend $500.00 for equipment and consumables!')
    });
    it("valid input - price with discount and both consumables", () =>{
      expect(motorcycleRider.otherSpendings([],['engine oil', 'oil filter'], true)).to.equal('You spend $90.00 for equipment and consumables with 10% discount!')
    });
    it("valid input - price without discount and both consumables", () =>{
      expect(motorcycleRider.otherSpendings([],['engine oil', 'oil filter'], false)).to.equal('You spend $100.00 for equipment and consumables!')
    });
    it("valid input - price without discount and one equipment and one consumable", () =>{
      expect(motorcycleRider.otherSpendings(['helmet'],['oil filter'], false)).to.equal('You spend $230.00 for equipment and consumables!')
    });
    it("valid input - price with discount and one equipment and one consumable", () =>{
      expect(motorcycleRider.otherSpendings(['helmet'],['oil filter'], true)).to.equal('You spend $207.00 for equipment and consumables with 10% discount!')
    });
   });
});
