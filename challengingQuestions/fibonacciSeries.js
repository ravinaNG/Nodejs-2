const readline = require('readline-sync'); //The interface is used with process.stdin and process.
let user = readline.question("Enter a number:- ");
let number = parseInt(user);
console.log(typeof number);

var count = 0;
var firstNum = 0;
var secondNum = 1;
var sum = 0;
for(count; count<number; count++){
    firstNum = secondNum;
    secondNum = sum;
    sum = firstNum + secondNum;
    console.log(sum);
}
