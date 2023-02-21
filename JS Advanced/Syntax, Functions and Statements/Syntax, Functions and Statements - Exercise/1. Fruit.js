function fruits(typeOfFruit, weightOfFruit, price) {
  
  let weightInKg = weightOfFruit / 1000;
  let finalPrice = weightInKg * price;
  console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}fruits('orange', 2500, 1.80);