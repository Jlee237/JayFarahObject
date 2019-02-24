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


//==================================================
// ARRAY OF OBJECTS AND PROPERTIES THAT AREN'T THERE
//==================================================
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

//===================================
// CRACKING THE CODE
//===================================
function decode(words){
  const cipher = {
    a: 2, 
    b: 3, 
    c: 4,
    d: 5
  };

  let wordArr = words.split(' ');
  let decodedWords = wordArr.map(word => {
    let newLetter;
    if (cipher[word[0]]){
      newLetter = cipher[word[0]] - 1; 
    }
    
    return newLetter ? word[newLetter] : ' '; 
  });

  return decodedWords.join('');
}

function decodeWOrds(){
}


//===================================
// LOTR
//===================================
function createCharacter(name, nickname, race, origin, attack, defense){
  return {
    name, nickname, race, origin, attack, defense,
    desrcibe: function(){
      console.log(`${name} is a ${race} from ${origin}.`);
    },

    evaluateFight: function(character){ 
      let damageGiven = 0;
      let damageReceived = 0; 
      if (this.attack > character.defense) {
        damageGiven = this.attack - character.def;
      }
      if (this.def < character.attack){
        damageReceived = character.attack - this.defense;
      }

      console.log(`Your opponent takes ${damageGiven} damage and you receive ${damageReceived} damage.`); 
    },
  };
}

// array of characters
const characters = [
  createCharacter('Gandalf the White', 'Gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'biblo', 'hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'Frodo', 'hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'man', 'Wizard', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'Legolas', 'elf', 'Woodland Realm', 8, 5)
];

// add character to array
characters.push(createCharacter('Arwen Undomiel', 'arwen', 'half-elf', 'Rivendell', 4, 5));

// find character 
characters.find(character => character.nickname === 'aragorn').desrcibe();

// filter character for hobbits
let hobbitArray = characters.filter(character => character.race === 'hobbit');

// filter characters with attack > 5
let strongCharacters = characters.filter(character => character.attack > 5);

