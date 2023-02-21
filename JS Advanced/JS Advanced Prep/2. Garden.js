class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error("Not enough space in the garden.");
    } else {
      let plant = {
        plantName,
        spaceRequired,
        ripe: false,
        quantity: 0,
      };
      this.plants.push(plant);
      this.spaceAvailable -= spaceRequired;
      return `The ${plantName} has been successfully planted in the garden.`;
    }
  }

  ripenPlant(plantName, quantity) {
    let checkPlant = this.plants.find((p) => p.plantName == plantName);
    if (!checkPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (checkPlant.ripe === true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    } else {
      checkPlant.ripe = true;
      checkPlant.quantity += quantity;
      if (quantity === 1) {
        return `${quantity} ${plantName} has successfully ripened.`;
      } else if (quantity > 1) {
        return `${quantity} ${plantName}s have successfully ripened.`;
      }
    }
  }
  harvestPlant(plantName) {
    let checkPlant = this.plants.find((p) => p.plantName == plantName);
    if (!checkPlant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (checkPlant.ripe === false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    } else {
      let indexOfPlant = this.plants.indexOf(checkPlant);
      this.plants.splice(indexOfPlant, 1);
      let harvestedPlant = {
        plantName,
        quantity: checkPlant.quantity,
      };
      this.storage.push(harvestedPlant);
      this.spaceAvailable += checkPlant.spaceRequired;
      return `The ${plantName} has been successfully harvested.`;
    }
  }

  generateReport() {
    let result = [];
    result.push(`The garden has ${this.spaceAvailable} free space left.`);

    let plantsInGarden = this.plants.map((plant) => plant.plantName);
    plantsInGarden.sort((a,b) => a.localeCompare(b));
    let secondRow = `Plants in the garden: ${plantsInGarden.join(', ')}`
    result.push(secondRow)
    if (this.storage.length == 0) {
      result.push("Plants in storage: The storage is empty.");
    } else {
      let plantsInStorage = this.storage.map(
        (p) => `${p.plantName} (${p.quantity})`
      );
      result.push(`Plants in storage: ${plantsInStorage.join(",")}`);
    }
    return result.join('\n')
  }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

