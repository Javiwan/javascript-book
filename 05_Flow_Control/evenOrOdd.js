function evenOrOdd(number){
  if(typeof number === 'number'){
    if(number % 2 === 0){
      console.log('even');
    }else{
      console.log('uneven');
    }
  }else{
    console.log(`${number} is not a number!`);
  }
    
  
  
  
}

console.log(evenOrOdd('hola'));
console.log(evenOrOdd(23));
console.log(evenOrOdd(346));