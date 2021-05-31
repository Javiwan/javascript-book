
function getName(phrase){
  let rlSync = require('readline-sync');
  return rlSync.question(phrase);
}

let firstName = getName("What's your name?: ");
let lastName = getName("What's your last name?: ");

console.log(`Hello, ${firstName} ${lastName}`);