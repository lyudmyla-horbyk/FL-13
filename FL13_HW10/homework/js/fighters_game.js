function Fighter({ name, damage, hp, strength, agility }) {

  let wins = 0;

  let loss = 0;

  const totalHP = 200;

  this.getName = () => name;

  this.getDamage = () => damage;

  this.getHealth = () => hp;

  this.getStrength = () => strength;

  this.getAgility = () => agility;

  this.attack = (defender) => {
    const TOTAL_PROBABILITY = 100;
    const defenderStrength = defender.getStrength();
    const defenderAgility = defender.getAgility();
    const successProbability = TOTAL_PROBABILITY - (defenderStrength + defenderAgility);
    if (Math.random() * TOTAL_PROBABILITY >= successProbability) {
      defender.dealDamage(damage);
      console.log(`${name} makes ${damage} damage to ${defender.getName()}`)
    } else {
      console.log(`${name} attack missed`)
    }
  }

  this.logCombatHistory = () => {
    console.log(`Name : ${name}, Wins: ${wins}, Losses ${loss}`);
  }

  this.heal = (healHP) => {
    hp = hp + healHP;
    if (hp > totalHP) {
      hp = totalHP;
    }
  }

  this.dealDamage = (damage) => {
    hp = hp - damage;
    if (hp < 0) {
      hp = 0;
    }
  }

  this.addWin = () => {
    wins = wins + 1;
  }

  this.addLoss = () => {
    loss = loss + 1;

  }

}

function battle(fighter1, fighter2) {

  if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
    let deadFighter;
    if (fighter1.getHealth() === 0) {
      deadFighter = fighter1;
    } else {
      deadFighter = fighter2;
    }
    console.log(`${deadFighter.getName()} is dead and can't fight.`);
    return
  }

  let i = 0;
  let winner;
  let looser;
  let division = 2;
  while (fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0) {
    i++;
    if (i % division === 0) {
      fighter2.attack(fighter1)
    } else {
      fighter1.attack(fighter2)
    }
  }

  if (fighter1.getHealth() > 0) {
    winner = fighter1;
  } else {
    winner = fighter2;
  }
  if (fighter1.getHealth() === 0) {
    looser = fighter1;
  } else {
    looser = fighter2;
  }

  console.log(`${winner.getName()} has won!`);
  winner.addWin();
  looser.addLoss();
}

const fighter1 = new Fighter({ name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100 });

const fighter2 = new Fighter({ name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90 });

battle(fighter1, fighter2);