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