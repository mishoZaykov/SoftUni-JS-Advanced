function listOfNames(input) {
  input
  .sort((a, b) => a.localeCompare(b))
  .forEach((ele,i) => {
    console.log(`${i + 1}.${ele}`);
  });

}
listOfNames(["John", "Bob", "Christina", "Ema"])