function sortAnArrayBy2Criteria(input) {
  input.sort((a,b) => a.length - b.length || a.localeCompare(b));
  console.log(input.join('\n'));
 
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);