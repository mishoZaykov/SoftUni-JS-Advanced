function solution(num) {
   
  return function sum(n) {
    return num + n;
  }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
