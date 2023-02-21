let bookSelection = require("./bookSelection");
const { expect } = require("chai");
// КОГАТО СЕ СРАВНЯВАТ МАСИВИ ТРЯБВА DEEP ДА СЕ СЛОЖИ ПРЕД EQUAL !!!!!!!!!!!!
describe("bookSelection tests", () =>{
  describe("isGenreSuitable tests", () =>{
      it("valid inputs - genre is Thriller and age is 12", () =>{
        expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
      });
      it("valid inputs - genre is Horror and age is 12", () =>{
        expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
      });
      it("valid inputs - genre is Thriller and age is 10", () =>{
        expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
      });
      it("valid inputs - genre is Horror and age is 8", () =>{
        expect(bookSelection.isGenreSuitable('Horror', 8)).to.equal(`Books with Horror genre are not suitable for kids at 8 age`);
      });
      it("valid inputs - genre is Comedy and age is 15", () =>{
        expect(bookSelection.isGenreSuitable('Comedy ', 15)).to.equal(`Those books are suitable`);
      });
      it("valid inputs - genre is Comedy and age is 10", () =>{
        expect(bookSelection.isGenreSuitable('Comedy ', 10)).to.equal(`Those books are suitable`);
      });
      it("valid inputs - genre is Horror and age is 15", () =>{
        expect(bookSelection.isGenreSuitable('Horror ', 20)).to.equal(`Those books are suitable`);
      });
      it("valid inputs - genre is Thriller and age is 15", () =>{
        expect(bookSelection.isGenreSuitable('Thriller ', 20)).to.equal(`Those books are suitable`);
      });
   });
   describe('isItAffortable tests', ()=>{
    it('invalid input - both inputs are not a number', ()=>{
      expect(() => bookSelection.isItAffordable('1', '2')).to.throw('Invalid input');
    });
    it('invalid input - first input is a number and second is not', ()=>{
      expect(() => bookSelection.isItAffordable(1, '2')).to.throw('Invalid input');
    });
    it('invalid input - first input is not a number and second is a number', ()=>{
      expect(() => bookSelection.isItAffordable('1', 2)).to.throw('Invalid input');
    });
    it('valid input - the price is bigger than the budget', ()=>{
      expect( bookSelection.isItAffordable(20, 10)).to.equal('You don\'t have enough money');
    });
    it('valid input - the price is bigger than the budget by one', ()=>{
      expect( bookSelection.isItAffordable(20, 19)).to.equal('You don\'t have enough money');
    });
    it('valid input - the price is cheaper than the budget and you have 10$ left', ()=>{
      expect( bookSelection.isItAffordable(20, 30)).to.equal('Book bought. You have 10$ left');
    });
    it('valid input - the price is cheaper than the budget and you have 85$ left', ()=>{
      expect( bookSelection.isItAffordable(20, 105)).to.equal('Book bought. You have 85$ left');
    });
    it('valid input - you have the exact amount to buy it and you have 0$ left', ()=>{
      expect( bookSelection.isItAffordable(20, 20)).to.equal('Book bought. You have 0$ left');
    });
   });
   describe('suitableTitles tests', ()=>{
    it('invalid input - both inputs are not valid', ()=>{
      expect(() => bookSelection.suitableTitles('1', 2)).to.throw('Invalid input');
    });
    it('invalid input - first input is valid and second is not', ()=>{
      expect(() => bookSelection.suitableTitles(['books'], 2)).to.throw('Invalid input');
    });
    it('invalid input - first input is not valid and second is valid', ()=>{
      expect(() => bookSelection.suitableTitles('books', 'Comedy')).to.throw('Invalid input');
    });// КОГАТО СЕ СРАВНЯВАТ МАСИВИ ТРЯБВА DEEP ДА СЕ СЛОЖИ ПРЕД EQUAL !!!!!!!!!!!!
    it('valid input - The Da Vinci Code should be only in the array', ()=>{
      expect( bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equal([ "The Da Vinci Code" ]);
    }); // КОГАТО СЕ СРАВНЯВАТ МАСИВИ ТРЯБВА DEEP ДА СЕ СЛОЖИ ПРЕД EQUAL !!!!!!!!!!!!
    it('valid input - The Da Vinci Code  and The Great Gatsby should be in the array', ()=>{
      expect( bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "The Great Gatsby", genre: "Thriller" }], 'Thriller')).to.deep.equal([ "The Da Vinci Code", "The Great Gatsby"]);
    });
   });
});
