function caloreObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if(i % 2 === 0) obj[arr[i]] = Number(arr[i + 1]);
  }
  console.log(obj);
}
caloreObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])