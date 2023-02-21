let carService = require("./03. Car Service");
const { expect } = require("chai");

describe("carService tests", () =>{
  describe("isItExpensive tests", () =>{
      it("valid inputs -  input is Engine", () =>{
        expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
      });
      it("valid inputs -  input is Transmission", () =>{
        expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
      });
      it("valid inputs -  input is different than Engine or Transmission", () =>{
        expect(carService.isItExpensive('Gearbox')).to.equal('The overall price will be a bit cheaper');
      });
   });
   describe('discount tests', ()=>{
    it('invalid inputs - both inputs are not a number', ()=>{
      expect(()=> carService.discount('1', '2')).to.throw("Invalid input");
    });
    it('invalid inputs - first input is number but second is not ', ()=>{
      expect(()=> carService.discount(1, '2')).to.throw("Invalid input");
    });
    it('invalid inputs - first input is not a number but second is ', ()=>{
      expect(()=> carService.discount('1', 2)).to.throw("Invalid input");
    });
    it('valid inputs - numberOfParts is 2 and cannot apply discount  ', ()=>{
      expect( carService.discount(2, 50)).to.equal("You cannot apply a discount");
    });
    it('valid inputs - numberOfParts is smaller than 2 and cannot apply discount  ', ()=>{
      expect( carService.discount(1, 50)).to.equal("You cannot apply a discount");
    });
    it('valid inputs - numberOfParts is 3 with discount 15%', ()=>{
      expect( carService.discount(3, 50)).to.equal(`Discount applied! You saved 7.5$`);
    });
    it('valid inputs - numberOfParts is 5 with discount 15%', ()=>{
      expect( carService.discount(5, 60)).to.equal(`Discount applied! You saved 9$`);
    });
    it('valid inputs - numberOfParts is 7 with discount 15%', ()=>{
      expect( carService.discount(7, 60)).to.equal(`Discount applied! You saved 9$`);
    });
    it('valid inputs - numberOfParts is 8 with discount 30%', ()=>{
      expect( carService.discount(8, 60)).to.equal(`Discount applied! You saved 18$`);
    });
    it('valid inputs - numberOfParts is 10 with discount 30%', ()=>{
      expect( carService.discount(10, 40)).to.equal(`Discount applied! You saved 12$`);
    });
   });
   describe('partsToBuy tests', ()=>{
    it('invalid inputs - both inputs are not arrays', ()=>{
      expect(()=> carService.partsToBuy('1', '2')).to.throw("Invalid input");
    });
    it('invalid inputs - first input is array and second is not array', ()=>{
      expect(()=> carService.partsToBuy(['parts'], '2')).to.throw("Invalid input");
    });
    it('invalid inputs - first input is not array and second is array', ()=>{
      expect(()=> carService.partsToBuy(2, ['parts'])).to.throw("Invalid input");
    });
    it('valid inputs - total sum must be 145', ()=>{
      expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145)
    });
    it('valid inputs - total sum must be 375', ()=>{
      expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"])).to.equal(375)
    });
    it('valid inputs - first array is empty and the total sum is 0', ()=>{
      expect(carService.partsToBuy([], ["blowoff valve", "coil springs"])).to.equal(0)
    });
   });
});
