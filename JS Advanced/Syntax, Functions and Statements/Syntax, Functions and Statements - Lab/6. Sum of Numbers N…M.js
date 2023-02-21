function sumOfNumbers(n, m) {
  let result = 0;
  let firstNum = Number(n);
  let secondNum = Number(m);

  for(let i = firstNum; i<= secondNum; i++){
    result+= i;
  }
  console.log(result);
}sumOfNumbers('1', '5' )