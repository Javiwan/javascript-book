function multiply(a,b){
  return a * b;
}

function askQuestion(phrase){
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(phrase));
}

let a = askQuestion('Enter the first number: ');
let b = askQuestion('Enter the second number: ');

let outcome = multiply(a,b);

console.log(`${a} * ${b} = ${outcome}`);
