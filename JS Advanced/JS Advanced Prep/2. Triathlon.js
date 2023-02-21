class Triathlon{
  constructor(competitionName){
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(participantName, participantGenre){
    if(this.participants[participantName]){
      return `${participantName} has already been added to the list`;
    }else{
      this.participants[participantName] = participantGenre;
      return `A new participant has been added - ${participantName}`;
    }
  }

  completeness(participantName, condition){
    if(!this.participants[participantName]){
      throw new Error(`${participantName} is not in the current participants list`);
    }
    if(this.participants[participantName] && condition < 30){
      throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
    }
    let completedDisciplines = Math.floor(condition / 30);
    if(completedDisciplines === 1 || completedDisciplines === 2){
      return `${participantName} could only complete ${completedDisciplines} of the disciplines`;
    }else{
      let participantGender = this.participants[participantName]
      this.listOfFinalists.push({participantName, participantGender});
      return `Congratulations, ${participantName} finished the whole competition`;
    }
  }

  rewarding(participantName){
    let participant = this.listOfFinalists.find(p => p.participantName == participantName)
    if(!participant){
      return `${participantName} is not in the current finalists list`;
    }else{
      return `${participantName} was rewarded with a trophy for his performance`;
    }
  }

  showRecord(criteria){
    if(this.listOfFinalists.length == 0){
      return `There are no finalists in this competition`;
    }
    let foundFinalist = this.listOfFinalists.find((finalist) => finalist.participantGender == criteria);
    if(criteria == 'all'){
      let result = [];
      result.push(`List of all ${this.competitionName} finalists:`);
      this.listOfFinalists
      .sort((a,b) => a.participantName.localeCompare(b.participantName))
      .forEach(p =>{
        result.push(`${p.participantName}`);
      })
      return result.join('\n')
    }
    if(!foundFinalist){
      return `There are no ${criteria}'s that finished the competition`;
    }else{
      return `${foundFinalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
    }

  }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));



