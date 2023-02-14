function subSum(numbers, start, end) {
  if(!Array.isArray(numbers)){
    return NaN;
  }
  
  let startIndex = Math.max(start, 0);
  let endiIndex = Math.min(end, numbers.length - 1);

  let subNumbers = numbers.slice(startIndex, endiIndex + 1);

  let sum = subNumbers.reduce((a, x) => a + Number(x), 0)
  return sum;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300)