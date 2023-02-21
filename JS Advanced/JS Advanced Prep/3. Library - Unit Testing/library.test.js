let library = require("./library");
const { assert, expect } = require("chai");

describe("Library tests", () => {
  describe("calcPriceOfBook tests", () => {
    it("invalid input - name of the book", () => {
      expect(() => library.calcPriceOfBook(1, 1)).to.throw("Invalid input");
    });
    it("invalid input - year of the book", () => {
      expect(() => library.calcPriceOfBook("1", "1")).to.throw("Invalid input");
    });
    it("Valid data and year is below 1980", () => {
      expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal(`Price of The Little Prince is 10.00`);
    });
    it("Valid data and year is equal to 1980", () => {
      expect(library.calcPriceOfBook('The Little Prince', 1980)).to.equal(`Price of The Little Prince is 10.00`);
    });
    it("Valid data and year is greater than 1980", () => {
      expect(library.calcPriceOfBook('The Little Prince', 1990)).to.equal(`Price of The Little Prince is 20.00`);
    });
  });
  describe("findBook tests", () => {
    it("invalid input - empty array", () => {
      expect(() => library.findBook([],'The little prince')).to.throw("No books currently available");
    });
    it("valid input - available book", () => {
      expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal('We found the book you want.');
    });
    it("invalid input - not available book", () => {
      expect(library.findBook(["Troy", "Life Style", "Torronto"], "The little prince")).to.equal('The book you are looking for is not here!');
    });
  });
  describe("arrangeTheBooks tests", () => {
    it("invalid input - string", () => {
      expect(() => library.arrangeTheBooks('test')).to.throw("Invalid input");
    });
    it("invalid input - negative number", () => {
      expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
    });
    it("valid input - less than available space (39)", () => {
      expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
    });
    it("valid input - equal to the available space (40)", () => {
      expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
    });
    it("valid input - greater than the available space (41)", () => {
      expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
    });
  });
}); 

