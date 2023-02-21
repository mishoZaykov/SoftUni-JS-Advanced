function townPopulaton(townsAsStrings) {
  // init result collection
  const result = {};

  // parse input
  for(let line of townsAsStrings){
    const tokens = line.split(' <-> ');
    const name = tokens[0];
    const population = Number(tokens[1]);
    // check if key exists
    if(name in result){
      result[name] += population;
    }else{
      result[name] = population;
    }
  }
 
  // print result
  for(let name in result){
    console.log(`${name} : ${result[name]}`);
  }
}

townPopulaton(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)