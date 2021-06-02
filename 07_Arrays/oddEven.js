let myArray = [1,3,4,11,4,2,4,9,17,16,0];

let evenOdd = myArray.map(number => (number % 2 === 0)? 'even':'odd');

console.log(evenOdd);