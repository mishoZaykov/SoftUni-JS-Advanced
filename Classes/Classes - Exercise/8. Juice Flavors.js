function juiceFlavours(input) {
  let juice = {};
  let juiceBottles = {};

  for (let line of input) {
    let[juiceName, juiceQuantity] = line.split(' => ');
    juiceQuantity = Number(juiceQuantity)

    if(!juice.hasOwnProperty(juiceName)){
      juice[juiceName] = 0;
    }
    juice[juiceName] += juiceQuantity;
    
    if(juice[juiceName] >= 1000){
      let numberOfBottles = Math.floor(juice[juiceName] / 1000);
      if(!juiceBottles.hasOwnProperty(juiceName)){
        juiceBottles[juiceName]= 0;
      }
      juiceBottles[juiceName] += numberOfBottles;
      juice[juiceName] -= numberOfBottles * 1000
    }
  }
  Object.entries(juiceBottles).forEach((bottle) => console.log(`${bottle[0]} => ${bottle[1]}`))
}
juiceFlavours(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)
