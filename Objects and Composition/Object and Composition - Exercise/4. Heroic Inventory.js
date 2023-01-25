function heroicInventory(input) {
  const result = input.reduce((acc, curr) =>{
    const [name,level, item] = curr.split(' / ');
    const hero = {
      name,
      level: Number(level),
      items: item ? item.split(', ') : []
    }
    acc.push(hero);
    return acc;
  },[]);
  console.log(JSON.stringify(result)); 
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])