let rlSync = require('readline-sync');

let theName = rlSync.question('What\'s your name?\n');
let theSurname = rlSync.question('What\'s your surname?\n');

console.log(`Hello, ${theName} ${theSurname}`);