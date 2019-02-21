'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100; 
  }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());


const objectOne = {
  foo : 'foo',
  bar : 'bar',
  fum : 'fum',
  quux : 'quux',
  spam : 'spam',
}

for (let key in objectOne) {
  console.log(`${key}: ${objectOne[key]}`);
}


const food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(food.meals[3]);


const people = [{
  name: 'Jay',
  jobTitle: 'Owner',
},{
  name: 'Kay',
  jobTitle: 'loan officer',
  boss: 'John'
},{
  name: 'Kim',
  jobTitle: 'loan officer',
  boss: 'Fred'
}];

for (let i=0; i< people.length; i++) {
  if (!people[i].boss){
    console.log(`${people[i].jobTitle} ${people[i].name} doesn't report to anybody.`);
  }
  else{
    console.log(`${people[i].jobTitle} ${people[i].name} report to ${people[i].boss}.`);
  }
}


function createCharacter(){
  const Gandalf = {
    name: 'Gandalf the White',
    nickname: 'gandalf',
    race: 'wizard',
    origin: 'Middle Earth',
    attack: 10,
    defense: 6,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character){
      return `Your opponent takes ${x} and you recieve ${y} damage.`;
    } 
  };

  const Bilbo = {
    name: 'Bilbo Baggins',
    nickname: 'bilbo',
    race: 'Hobbit',
    origin: 'The Shire',
    attack: 2,
    defense: 1,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character){
      return `Your opponent takes ${x} and you recieve ${y} damage.`;
    } 
  };

  const Frodo = {
    name: 'Frodo Baggins',
    nickname: 'frodo',
    race: 'Hobbit',
    origin: 'The Shire',
    attack: 3,
    defense: 2,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character){
      return `Your opponent takes ${x} and you recieve ${y} damage.`;
    } 
  };

  const Aragorn = {
    name: 'Aragorn son of Arathorn',
    nickname: 'aragorn',
    race: 'man',
    origin: 'Dunnedain',
    attack: 6,
    defense: 8,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character){
      return `Your opponent takes ${x} and you recieve ${y} damage.`;
    } 
  };

  const Legolas = {
    name: 'Legolas',
    nickname: 'legolas',
    race: 'elf',
    origin: 'Woodland Realm',
    attack: 8,
    defense: 5,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character){
      return `Your opponent takes ${x} and you recieve ${y} damage.`;
    } 
  };
}

const characters = [createCharacter()];