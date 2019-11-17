const readline = require('readline-sync');
let user = readline.question("(Prime/NotPrime)Enter your number to check:- ")
let number = parseInt(user);

let count = 2;
for(count; count<number; count++){
    if(number % count == 0){
        console.log(number, " is not a prime number.");
        break;
    }
    if(count === number-1){
        console.log(number, " is a prime number.");
    }
}