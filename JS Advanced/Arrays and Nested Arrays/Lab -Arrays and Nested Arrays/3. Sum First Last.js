function sumFirstLast(array) {
  let firstElement = Number(array.shift());
  let lastElement = Number(array.pop());
  let sum = firstElement + lastElement;
  console.log(sum);
}sumFirstLast(['20', '30', '40'])