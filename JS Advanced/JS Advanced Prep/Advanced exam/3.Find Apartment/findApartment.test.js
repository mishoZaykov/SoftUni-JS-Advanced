let findNewApartment = require("./findApartment");
const { expect } = require("chai");

describe("findNewApartment tests", () =>{
  describe("isGoodLocation tests", () =>{
      it("invalid input - both inputs are invalid", () =>{
        expect(()=> findNewApartment.isGoodLocation(1, 'string')).to.throw('Invalid input!')
      });
      it("invalid input - first input is valid and second is not", () =>{
        expect(()=> findNewApartment.isGoodLocation('string', 'string')).to.throw('Invalid input!')
      });
      it("invalid input - first input is invalid and second is valid", () =>{
        expect(()=> findNewApartment.isGoodLocation(1, true)).to.throw('Invalid input!')
      });
      it("valid input - city is not Sofia, Plovdiv or varna and is true", () =>{
        expect( findNewApartment.isGoodLocation('Ruse', true)).to.equal('This location is not suitable for you.')
      });
      it("valid input - city is not Sofia, Plovdiv or varna and is false", () =>{
        expect( findNewApartment.isGoodLocation('Ruse', false)).to.equal('This location is not suitable for you.')
      });
      it("valid input - city is not Sofia, Plovdiv or varna and is false 2", () =>{
        expect( findNewApartment.isGoodLocation('Stara Zagora', false)).to.equal('This location is not suitable for you.')
      });
      it("valid input - city is not Sofia, Plovdiv or varna and is true 2", () =>{
        expect( findNewApartment.isGoodLocation('Stara Zagora', true)).to.equal('This location is not suitable for you.')
      });
      it("valid input - city is Sofia and is true", () =>{
        expect( findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!')
      });
      it("valid input - city is Plovdiv and is true", () =>{
        expect( findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!')
      });
      it("valid input - city is Varna and is true", () =>{
        expect( findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!')
      });
      it("valid input - city is Sofia and is false", () =>{
        expect( findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.')
      });
      it("valid input - city is Plovdiv and is false", () =>{
        expect( findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.')
      });
      it("valid input - city is Varna and is false", () =>{
        expect( findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.')
      });
   });
   describe('isLargeEnough tests', ()=>{
    it('invalid inputs - both inputs are invalid', ()=>{
      expect(()=> findNewApartment.isLargeEnough(1, '1')).to.throw('Invalid input!');
    });
    it('invalid inputs - both inputs are invalid and array is empty', ()=>{
      expect(()=> findNewApartment.isLargeEnough([], '1')).to.throw('Invalid input!');
    });
    it('invalid inputs - first input is empty array and second is valid', ()=>{
      expect(()=> findNewApartment.isLargeEnough([], 1)).to.throw('Invalid input!');
    });
    it('invalid inputs - first input is invalid and second is valid', ()=>{
      expect(()=> findNewApartment.isLargeEnough('string', 1)).to.throw('Invalid input!');
    });
    it('invalid inputs - first input is invalid and second is negative number', ()=>{
      expect(()=> findNewApartment.isLargeEnough('string', -1)).to.throw('Invalid input!');
    });
    it('invalid inputs - first input is invalid and second is 0 ', ()=>{
      expect(()=> findNewApartment.isLargeEnough('string', 0)).to.throw('Invalid input!');
    });
    it('valid inputs - all apartments are smaller than tha minimum', ()=>{
      expect(findNewApartment.isLargeEnough([40, 50, 60], 70)).to.equal('');
    });
    it('valid inputs - only one apartment is large enough', ()=>{
      expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal('60');
    });
    it('valid inputs - only two apartment is large enough', ()=>{
      expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal('50, 60');
    });
    it('valid inputs - only three apartment is large enough', ()=>{
      expect(findNewApartment.isLargeEnough([40, 50, 60], 40)).to.equal('40, 50, 60');
    });
    it('valid inputs - all three apartment is large enough', ()=>{
      expect(findNewApartment.isLargeEnough([40, 50, 60], 1)).to.equal('40, 50, 60');
    });
    it('valid inputs - only one apartment is large enough', ()=>{
      expect(findNewApartment.isLargeEnough([40, 50, 60, 100], 100)).to.equal('100');
    });
    it('valid inputs - only one apartment is large enough and there is only one', ()=>{
      expect(findNewApartment.isLargeEnough([40], 20)).to.equal('40');
    });
    it('valid inputs - no apartment is large enough', ()=>{
      expect(findNewApartment.isLargeEnough([40], 500)).to.equal('');
    });
   });
   describe('isItAffortable tests', ()=>{
    it('invalid inputs - both inputs are not a number', ()=>{
      expect(()=> findNewApartment.isItAffordable('1','2')).to.throw('Invalid input!');
    });
    it('invalid inputs - first is second is not', ()=>{
      expect(()=> findNewApartment.isItAffordable(1,'2')).to.throw('Invalid input!');
    });
    it('invalid inputs - second is first is not', ()=>{
      expect(()=> findNewApartment.isItAffordable('1',2)).to.throw('Invalid input!');
    });
    it('invalid inputs - both numbers are negative', ()=>{
      expect(()=> findNewApartment.isItAffordable(-1,-2)).to.throw('Invalid input!');
    });
    it('invalid inputs - both numbers are 0', ()=>{
      expect(()=> findNewApartment.isItAffordable(0,0)).to.throw('Invalid input!');
    });
    it('invalid inputs - first is negative second is 0', ()=>{
      expect(()=> findNewApartment.isItAffordable(-1,0)).to.throw('Invalid input!');
    });
    it('invalid inputs - first is 0 second is negative', ()=>{
      expect(()=> findNewApartment.isItAffordable(0,-1)).to.throw('Invalid input!');
    });
    it('invalid inputs - first is correct second is 0', ()=>{
      expect(()=> findNewApartment.isItAffordable(1,0)).to.throw('Invalid input!');
    });
    it('invalid inputs - first is correct second is negative', ()=>{
      expect(()=> findNewApartment.isItAffordable(1,-1)).to.throw('Invalid input!');
    });
    it('invalid inputs - second is correct first is 0', ()=>{
      expect(()=> findNewApartment.isItAffordable(0, 2)).to.throw('Invalid input!');
    });
    it('invalid inputs - second is correct first is negative', ()=>{
      expect(()=> findNewApartment.isItAffordable(-1, 2)).to.throw('Invalid input!');
    });
    it('valid inputs - price is bigger than budget', ()=>{
      expect(findNewApartment.isItAffordable(50, 20)).to.equal(`You don't have enough money for this house!`);
    });
    it('valid inputs - price is bigger than budget', ()=>{
      expect(findNewApartment.isItAffordable(50, 40)).to.equal(`You don't have enough money for this house!`);
    });
    it('valid inputs - price is smaller than budget', ()=>{
      expect(findNewApartment.isItAffordable(50, 60)).to.equal(`You can afford this home!`);
    });
    it('valid inputs - price is equal than budget', ()=>{
      expect(findNewApartment.isItAffordable(50, 50)).to.equal(`You can afford this home!`);
    });
   });
});
