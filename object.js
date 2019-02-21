'use strict';

function createMyObject(){
  return {
    foo:'bar',
    answerTouniver:42,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'hello';
    }
  };
}


function updateObject(obj){
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function (){
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

personMaker();