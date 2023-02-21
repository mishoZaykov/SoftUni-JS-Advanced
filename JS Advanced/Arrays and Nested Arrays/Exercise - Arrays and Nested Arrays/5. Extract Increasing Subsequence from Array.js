function extractIncreasingSub(numbers) {
  let biggestNumber = numbers.shift();
  const finalResult = [biggestNumber];
  for (const number of numbers) {
    if(number >= biggestNumber){
      biggestNumber = number;
      finalResult.push(number)
    }
  }
  return finalResult;
}
extractIncreasingSub([1, 3, 8, 4, 10, 12, 3, 2, 24]);