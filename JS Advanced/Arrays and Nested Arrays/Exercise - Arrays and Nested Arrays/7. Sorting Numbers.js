function sortingNumbers(arr) {
  let resultArray = [];
  arr = arr
  .sort((a, b) => a - b);
  while (arr.length !== 0) {
    resultArray.push(arr.shift());
    resultArray.push(arr.pop());
  } 
  return resultArray;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])