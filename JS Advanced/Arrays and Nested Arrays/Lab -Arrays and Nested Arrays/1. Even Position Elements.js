function evenPosition(arr) {
  let result = '';
  for (i = 0; i < arr.length; i++){
    if(i % 2 == 0){
      result += arr[i] + ' ';
      
    }
  }
  console.log(result);
}evenPosition(['20', '30', '40', '50', '60'])