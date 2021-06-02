function getFactorial(number){
  let result = 1;
  for(let i = 1; i <= number; i+=1){
    result *= i;
  }
  console.log(`${number}! = ${result}`);
}

getFactorial(2);
getFactorial(4);
getFactorial(5);
getFactorial(8);