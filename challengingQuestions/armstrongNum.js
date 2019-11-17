const readline = require('readline-sync');
let user = readline.question("please type a number:- ");

let userNum = parseInt(user);
var index = 0;
let sum = 0;
var number;

for(index; index<user.length; index++){
    number = parseInt(user[index]);
    console.log(number*number*number);
    sum = sum + number*number*number;
}

if(userNum === sum){
    console.log(userNum, " is  armstrong number.");
}
else{
    console.log(userNum, " is not a armstrong number.")
}