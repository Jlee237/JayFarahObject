'use strict'

function makeStudentsReport(data){
  let studentData = [];
  for (let i=0; i<data.length; i++){
    studentData.push(`${data[i].name}: ${data[i].grade}`);
  }
  return studentData;
}


const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  students.forEach(student => student.status = 'In Summer School');

  return students;
}


function findById(items, idNum){
  return items.find(item => item.id === idNum);
}