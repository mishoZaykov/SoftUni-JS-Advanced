function commandProcessor() {
  let string = '';

  function append(str) {
    string += str;
  }

  function print() {
    console.log(string);
  }

  function removeStart(n) {
    string = string.slice(n);
  }

  function removeEnd(n) {
    string = string.slice(0, -n);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print
  };
}

const myProc = commandProcessor();

myProc.append('hello');
myProc.append('again');
myProc.removeStart(3);
myProc.removeEnd(4);
myProc.print()