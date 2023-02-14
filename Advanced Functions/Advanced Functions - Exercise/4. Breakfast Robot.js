function solution() {
  const recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },

    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  const stock = {
    carbohydrate: 0,
    flavour: 0,
    fat: 0,
    protein: 0,
  };

  const commands = {
    restock,
    prepare,
    report,
  };

  return manager;

  function manager(line) {
    const [command, param, quantity] = line.split(" ");
    return commands[command](param, quantity);
  }

  function restock(ingredient, quantity) {
    stock[ingredient] += Number(quantity);
    return "Success";
  }

  function prepare(recipe, quantityMeals) {
    quantityMeals = Number(quantityMeals);
    const order = Object.entries(recipes[recipe]);
    order.forEach((ingredient) => (ingredient[1] *= quantityMeals));
    for (let [ingredient, requiredQuantity] of order) {
      if (stock[ingredient] < requiredQuantity) {
        return `Error: not enough ${ingredient} in stock`;
      }
    }

    order.forEach(
      ([ingredient, requiredQuantity]) =>
        (stock[ingredient] -= requiredQuantity)
    );
    return 'Success';
  }

  function report() {
    return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
  }
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("report"));
