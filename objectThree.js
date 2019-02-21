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


