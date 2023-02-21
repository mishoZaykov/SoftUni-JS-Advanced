let chooseYourCar = require("./chooseYourCar");
const { assert, expect } = require("chai");
describe("Choose Your Car tests", () =>{
  describe("choosingType tests", () =>{
      it("invalid input - the year is below 1900", () =>{
          expect(() => chooseYourCar.choosingType('Sedan', 'red', 1899)).to.throw('Invalid Year!');
      });
      it("invalid input - the year is above 2022", () =>{
        expect(() => chooseYourCar.choosingType('Sedan', 'red', 2023)).to.throw('Invalid Year!');
      });
      it("invalid input - the year is negave number", () =>{
        expect(() => chooseYourCar.choosingType('Sedan', 'red', -10)).to.throw('Invalid Year!');
      });
      it("invalid input - the type of car is not Sedan", () =>{
        expect(() => chooseYourCar.choosingType('combi', 'red', 2000)).to.throw('This type of car is not what you are looking for.');
      });
      it("valid input - the year of the car is equal to 2010", () =>{
        expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
      });
      it("valid input - the year of the car is greater than 2010", () =>{
        expect(chooseYourCar.choosingType('Sedan', 'red', 2015)).to.equal('This red Sedan meets the requirements, that you have.');
      });
      it("valid input - the year of the car is below 2010", () =>{
        expect(chooseYourCar.choosingType('Sedan', 'red', 2008)).to.equal('This Sedan is too old for you, especially with that red color.');
      });
   });
   describe('brandName tests', ()=>{
    it("invalid input - brands is not array and index is a number", () =>{
      expect(() => chooseYourCar.brandName('bmw', 4)).to.throw('Invalid Information!');
    });
    it("invalid input - brands is an array but index is not a number", () =>{
      expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '4')).to.throw('Invalid Information!');
    });
    it("invalid input - brands is not an array and index is not a number", () =>{
      expect(() => chooseYourCar.brandName( "Peugeot", '4')).to.throw('Invalid Information!');
    });
    it("invalid input - brands is an array but index is negative number", () =>{
      expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw('Invalid Information!');
    });
    it("invalid input - brands is an array but index is decimal number", () =>{
      expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2.6)).to.throw('Invalid Information!');
    });
    it("invalid input - index is bigger than the arrays length", () =>{
      expect(() => chooseYourCar.brandName(["BMW"], 1)).to.throw('Invalid Information!');
    });
    it('valid input - return array without one BMW', () =>{
      expect(chooseYourCar.brandName(['Mazda', 'BMW', 'Mercedes'], 1)).to.equal('Mazda, Mercedes');
    });
   });
   describe('carFuelConsumption tests', () =>{
    it('invalid input - bought inputs are not a number',()=>{
      expect(() => chooseYourCar.carFuelConsumption('1', '2')).to.throw('Invalid Information!')
    });
    it('invalid input - bought inputs are negative number',()=>{
      expect(() => chooseYourCar.carFuelConsumption(-1, -2)).to.throw('Invalid Information!')
    });
    it('invalid input - first inputs is correct and second is negative',()=>{
      expect(() => chooseYourCar.carFuelConsumption(1, -2)).to.throw('Invalid Information!')
    });
    it('invalid input - first inputs is 0 and second is correct',()=>{
      expect(() => chooseYourCar.carFuelConsumption(1, -2)).to.throw('Invalid Information!')
    });
    it('invalid input - first inputs is string and second is correct',()=>{
      expect(() => chooseYourCar.carFuelConsumption('1', 2)).to.throw('Invalid Information!')
    });
    it('invalid input - first inputs is correct and second is string',()=>{
      expect(() => chooseYourCar.carFuelConsumption(1, '2')).to.throw('Invalid Information!')
    });
    it('valid input - consumpion is 5.00',()=>{
      expect(chooseYourCar.carFuelConsumption(60, 3)).to.equal(`The car is efficient enough, it burns 5.00 liters/100 km.`)
    });
    it('valid input - consumpion is 7.00',()=>{
      expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`)
    });
    it('valid input - consumpion is 8.00',()=>{
      expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal(`The car burns too much fuel - 8.00 liters!`)
    });
    it('valid input - consumpion is 10.00',()=>{
      expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal(`The car burns too much fuel - 10.00 liters!`)
    });

   });
});
