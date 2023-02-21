let movieTheater = require("./03. Movie Theater");
const { expect } = require("chai");

describe("movieTheater tests", () =>{
  describe("ageRestrictions tests", () =>{
      it("valid input - movie rating is G", () =>{
        expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
      });
      it("valid input - movie rating is PG", () =>{
        expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
      });
      it("valid input - movie rating is R", () =>{
        expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
      });
      it("valid input - movie rating is NC-17", () =>{
        expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
      });
      it("invalid input - movie rating is different", () =>{
        expect(movieTheater.ageRestrictions('adf')).to.equal(`There are no age restrictions for this movie`);
      });
   });
   describe('moneySpent tests', ()=>{
    it('invalid input - all input data is invalid', ()=>{
      expect(()=> movieTheater.moneySpent('1', 2, 3)).to.throw("Invalid input")
    });
    it('invalid input - first input is valid others not', ()=>{
      expect(()=> movieTheater.moneySpent(1, 2, 3)).to.throw("Invalid input")
    });
    it('invalid input - second input is valid others not', ()=>{
      expect(()=> movieTheater.moneySpent('1', [], 3)).to.throw("Invalid input")
    });
    it('invalid input - third input is valid others not', ()=>{
      expect(()=> movieTheater.moneySpent('1', 2, [])).to.throw("Invalid input")
    });
    it('invalid input - third and second input is valid others not', ()=>{
      expect(()=> movieTheater.moneySpent('1', [], [])).to.throw("Invalid input")
    });
    it('invalid input - first and second input is valid others not', ()=>{
      expect(()=> movieTheater.moneySpent(1, [], 'asd')).to.throw("Invalid input")
    });
    it('valid input - price for 2 tickets with Nachos and Popcorn', ()=>{
      expect( movieTheater.moneySpent(2, ['Nachos', 'Popcorn'], [])).to.equal(`The total cost for the purchase is 40.50`);
    });
    it('valid input - price for 3 tickets with Nachos and Popcorn and discount', ()=>{
      expect( movieTheater.moneySpent(3, ['Nachos', 'Popcorn'], [])).to.equal(`The total cost for the purchase with applied discount is 44.40`);
    });
    it('valid input - price for 2 tickets with Soda and Water', ()=>{
      expect( movieTheater.moneySpent(2, [], ['Soda', 'Water'])).to.equal(`The total cost for the purchase is 34.00`);
    });
    it('valid input - price for 4 tickets with Soda and discount', ()=>{
      expect( movieTheater.moneySpent(4, [], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 50.00`);
    });
    it('valid input - price for 3 tickets with Soda and Nachos and dicscount ', ()=>{
      expect( movieTheater.moneySpent(3, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 42.80`);
    });
    it('valid input - price for 1 tickets with Soda and Nachos', ()=>{
      expect( movieTheater.moneySpent(1, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase is 23.50`);
    });
   });
   describe('reservation tests', ()=>{
    it('invalid input - both inputs are invalid', ()=>{
      expect(()=> movieTheater.reservation('array', '1')).to.throw('Invalid input');
    });
    it('invalid input - first input is valid and second is not', ()=>{
      expect(()=> movieTheater.reservation([], '1')).to.throw('Invalid input');
    });
    it('invalid input - first input is invalid and second is valid', ()=>{
      expect(()=> movieTheater.reservation('array', 1)).to.throw('Invalid input');
    });
    it('valid input - available rows must be 2', ()=>{
      expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 1 }, { rowNumber: 2, freeSeats: 2}],2)).to.equal(2)
    });
   });
});
