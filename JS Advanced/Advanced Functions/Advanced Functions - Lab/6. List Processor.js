function listProcessor(input) {
  const result = [];

  const commands = {
    add(string) {
      result.push(string);
    },
    remove(string){
      while(result.includes(string)){
        result.splice(result.indexOf(string), 1)
      }
    },
    print(){
      console.log(result.join(','));
    }
  };

  input.forEach(line => {
    const [command, text] = line.split(' ');
    commands[command](text);
  });
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])