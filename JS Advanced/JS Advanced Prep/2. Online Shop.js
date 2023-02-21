class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error(`Not enough space in the warehouse.`);
    } else {
      this.products.push({ product, quantity });
      this.warehouseSpace -= Number(spaceRequired);
      return `The ${product} has been successfully delivered in the warehouse.`;
    }
  }

  quantityCheck(product, minimalQuantiry) {
    let productCheck = this.products.find((x) => x.product == product);
    if (!productCheck) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minimalQuantiry <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }
    if (minimalQuantiry <= productCheck.quantity) {
      return `You have enough from product ${product}.`;
    } else {
      let difference = minimalQuantiry - productCheck.quantity;
      productCheck.quantity = minimalQuantiry;
      return `You added ${difference} more from the ${productCheck.product} products.`;
    }
  }

  sellProduct(product) {
    let productCheck = this.products.find((x) => x.product == product);
    if (!productCheck) {
      throw new Error(`There is no ${product} in the warehouse.`);
    } else {
      productCheck.quantity -= 1;
      let quantity = product.quantity;
      this.sales.push({product, quantity});
      return `The ${productCheck.product} has been successfully sold.`;
    }
  }

  revision(){
    let result = [];
    if(this.sales.length === 0){
      throw new Error('There are no sales today!');
    }else{
      result.push(`You sold ${this.sales.length} products today!`);
    }
    result.push('Products in the warehouse:');
    this.products.map(x => result.push(`${x.product}-${x.quantity} more left`));
    return result.join('\n');
  }
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


