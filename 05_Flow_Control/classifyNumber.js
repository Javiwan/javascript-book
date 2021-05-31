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