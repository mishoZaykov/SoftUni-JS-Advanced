class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals[peak]) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals[peak]) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.goals[peak] && this.resources == 0) {
      throw new Error("You don't have enough resources to start the hike");
    }
    let difference = time * 10;
    this.resources -= difference;
    if (this.resources < 0) {
      return "You don't have enough resources to complete the hike";
    } else {
      this.listOfHikes.push({ peak, time, difficultyLevel });
      return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
  }
  rest(time) {
    let restTime = time * 10;
    this.resources += restTime;
    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${restTime}% resources`;
    }
  }

  showRecord(criteria) {
    let result = [];
    if (this.listOfHikes.length == 0) {
      return `${this.username} has not done any hiking yet`;
    }
    if (criteria == "all") {
      result.push("All hiking records:");
      this.listOfHikes.forEach((h) => {
        result.push(`${this.username} hiked ${h.peak} for ${h.time} hours`);
      });
    } else if (criteria == "hard" || criteria == "easy") {
      let foundHikes = this.listOfHikes.filter(
        (hikes) => hikes.difficultyLevel == criteria
      );
      let sortedHikes = foundHikes.sort((a, b) => a.time - b.time);
      let bestHike = sortedHikes[0];

      if (bestHike == undefined) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    }
    return result.join("\n");
  }
}
const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
