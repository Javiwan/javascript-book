function classifyNumber(number){
  if(number < 0){
    console.log(`${number} is less than Zero`);
  }
  else if (number >= 0 && number <= 50){
    console.log(`${number} is between 51 and 100`);
  }
  else if (number > 50 && number <= 100){
    console.log(`${number} is between 51 and 100`);
  }
  else if (number > 100){
    console.log(`${number} is grater than 100`);
  }
}

classifyNumber(25);
classifyNumber(75);
classifyNumber(125);
classifyNumber(-25);

/*Better solution

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

*/