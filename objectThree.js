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
  jobTitle: 'Unemployed',
},{
  name: 'Kay',
  jobTitle: 'loan officer',
},{
  name: 'Kim',
  jobTitle: 'student',
}];

for (let i=0; i< people.length; i++) {
  console.log(`${people[i].name} ${people[i].jobTitle}`);
}

