function stringLength(...args) {
  let total = 0;
  for (const item of args) {
    total += item.length;
  }
  let sum = total / 3;
  console.log(total);
  console.log(Math.floor(sum));
}stringLength('chocolate', 'ice cream', 'cake')