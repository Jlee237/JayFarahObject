'use strict'

function makeStudentsReport(data){
  let studentData = [];
  for (let i=0; i<data.length; i++){
    studentData.push(`${data[i].name}: ${data[i].grade}`);
  }
  return studentData;
}