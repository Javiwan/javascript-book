let result = 1;

function factorial(number){
    if (number === 1) return number;
    return number * factorial(number - 1);
    result *= number - 1;
  }

  

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(8));