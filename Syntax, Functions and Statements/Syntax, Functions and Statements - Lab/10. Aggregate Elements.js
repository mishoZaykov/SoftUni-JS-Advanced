function aggregateElements(array) {
  let sum = 0;
  let sumInverse = 0;
  let concat = '';
  for (const num of array) {
    sum += num;
    sumInverse += (1 / num);
    concat += num.toString()
  }

  console.log(sum);
  console.log(sumInverse);
  console.log(concat);
}aggregateElements([1, 2, 3])