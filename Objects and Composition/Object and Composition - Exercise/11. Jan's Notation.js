function jansNotation(arr) {
  const ERROR_MESSAGE = "Error: too many operands!";
  const nums = [];
  const operations = {
    '+': (a, b) => b + a,
    '-': (a, b) => b - a,
    '*': (a, b) => b * a,
    '/': (a, b) => b / a,
  };

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(typeof element === 'number'){
      nums.push(element);
    }else{
      if(nums.length < 2){
        return 'Error: not enough operands!';
      }
      nums.push(operations[element](nums.pop(), nums.pop()));
    }
  }
  if(nums.length != 1){
    return ERROR_MESSAGE;
  }
  return nums[0]
}
console.log(jansNotation([3, 4, "+"]));

console.log(jansNotation([7, 33, 8, "-"]));
