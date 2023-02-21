function GCD(a, b) {
  while (b) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}GCD(15, 5)