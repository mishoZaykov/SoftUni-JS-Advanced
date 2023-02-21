class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    footballPlayers.map((p) => {
      let [name, age, value] = p.split("/");
      age = Number(age);
      value = Number(value);

      let player = this.invitedPlayers.find(x => x.name == name);
      if(player){
        if(player.value < value){
          player.value = value;
        }
      }else{
        this.invitedPlayers.push({name, age, value})
      }
    });
    let result = [];
    this.invitedPlayers.map(p =>{
      result.push(p.name);
    });
    return `You successfully invite ${result.join(', ')}.`
  }

  signContract(selectedPlayer){
    let boughtPlayer = ''
    let buyingPrice = 0;
    let [name, playerOffer] = selectedPlayer.split('/');
    playerOffer = Number(playerOffer);
    let player = this.invitedPlayers.find(x => x.name == name);
    let priceDifference = player.value - playerOffer;
    if(!player){
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (playerOffer < player.value){
      throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
    }else{
      player.value = 'Bought';
      boughtPlayer = player.name;
      buyingPrice = playerOffer
    }
    return `Congratulations! You sign a contract with ${boughtPlayer} for ${buyingPrice} million dollars.`;
  }
  
  ageLimit(name, age){
    let player = this.invitedPlayers.find(x => x.name == name);
    
    if(!player){
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if(player.age < age){
      let ageDifference = age - player.age;
      if(ageDifference < 5){
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
      }
      if(ageDifference > 5){
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    }
    if(player.age >= age){
      return `${name} is above age limit!`
    }
  }

  transferWindowResult(){
    let result = [];
    result.push('Players list:');
    this.invitedPlayers
    .sort((a,b) => a.name.localeCompare(b.name))
    .forEach(p =>{
      result.push(`Player ${p.name}-${p.value}`)
    })

    return result.join('\n');
  }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


