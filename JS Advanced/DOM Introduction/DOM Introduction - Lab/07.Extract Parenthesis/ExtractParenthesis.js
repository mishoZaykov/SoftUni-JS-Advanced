function extract(content) {
  let pata = document.getElementById(content).textContent;
  let pattern = /\((.+?)\)/g;
  let result = '';

  let match = pattern.exec(pata);
  while (match !== null) {
    result+= match[1] + '; '
    match = pattern.exec(pata);
  }

  return result
}let text = extract("content");
