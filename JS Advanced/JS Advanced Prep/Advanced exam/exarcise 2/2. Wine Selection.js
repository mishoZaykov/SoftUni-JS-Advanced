class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space <= 0) {
      throw new Error("Not enough space in the cellar.");
    } else {
      for (let i = 0; i < this.space; i++) {
        this.space--;
        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
      }
    }
  }

  payWineBottle(wineName, price) {
    let checkWine = this.wines.find((w) => w.wineName == wineName);
    if (!checkWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (checkWine.paid === true) {
      throw new Error(`${wineName} has already been paid.`);
    } else {
      checkWine.paid = true;
      this.bill += price;
      return `You bought a ${wineName} for a ${price}$.`;
    }
  }

  openBottle(wineName) {
    let checkWine = this.wines.find((w) => w.wineName == wineName);
    if (!checkWine) {
      throw new Error("The wine, you're looking for, is not found.");
    }
    if (checkWine.paid === false) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    } else {
      let indexOfWine = this.wines.indexOf(checkWine);
      this.wines.splice(indexOfWine, 1);
      return `You drank a bottle of ${wineName}.`;
    }
  }
  cellarRevision(wineType) {
    let result = [];
    if (wineType === undefined) {
      result.push(`You have space for ${this.space} bottles more.`);
      result.push(`You paid ${this.bill}$ for the wine.`);
      this.wines
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .forEach((w) => {
          if (w.paid == true) {
            result.push(`${w.wineName} > ${w.wineType} - Has Paid.`);
          }
          if (w.paid == false) {
            result.push(`${w.wineName} > ${w.wineType} - Not Paid.`);
          }
        });
      return result.join("\n");
    } else {
      let checkType = this.wines.find((w) => w.wineType == wineType);
      if (checkType) {
        this.wines
          .sort((a, b) => a.wineName.localeCompare(b.wineName))
          .forEach((w) => {
            if (w.paid == true) {
              result.push(`${w.wineName} > ${w.wineType} - Has Paid.`);
            }
            if (w.paid == false) {
              result.push(`${w.wineName} > ${w.wineType} - Not Paid.`);
            }
          });
        return result.join(`\n`);
      } else {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }
    }
  }
}
// const selection = new WineSelection(5);
// selection.reserveABottle("Bodegas Godelia Mencía", "Rose", 144);
// selection.payWineBottle("Bodegas Godelia Mencía", 144);
// selection.reserveABottle("Sauvignon Blanc Marlborough", "White", 50);
// selection.reserveABottle("Cabernet Sauvignon Napa Valley", "Red", 120);
// console.log(selection.cellarRevision());

const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.cellarRevision('Rose'));
