function heroes() {
  const health = 100;
  const manaOrStamina = 100;
  const create = {
    fighter: (name) => {
      return (obj = {
        name,
        health,
        stamina: manaOrStamina,
        fight() {
          this.stamina--;
          console.log(`${name} slashes at the foe!`);
        }
      })
    },
    mage: (name) => {
      return (obj = {
        name,
        health,
        mana: manaOrStamina,
        cast(spell){
          this.mana--;
          console.log(`${name} cast ${spell}`);
        }
      })
    }
  }

  return create;
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
