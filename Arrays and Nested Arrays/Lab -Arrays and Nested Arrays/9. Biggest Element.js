function biggestElement(matrix) {
  let max = Math.max(...matrix[0]);
  for(let row = 1; row < matrix.length; row++){
    let rowMax = Math.max(...matrix[row]);
    if(rowMax >= max){
      max = rowMax
    }
  }
  console.log(max);
}biggestElement(
  [[20, 50, 10],
  [8, 33, 145]]
 )