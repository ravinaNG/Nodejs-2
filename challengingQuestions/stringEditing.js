const readline = require('readline-sync');

function encryptMessage(input){
    const a = '0';
    const e = '1';
    const o = '2';
    const u = '3';
    const subString = 'aca';

    let revString = ""
    let index = input.length - 1;
    for(index; index>=0; index--){
        if(input[index] === 'a'){
            revString = revString + a;
        }
        else if(input[index] === 'e'){
            revString = revString + e;
        }
        else if(input[index] === 'o'){
            revString = revString + 0;
        }
        else if(input[index] === 'u'){
            revString = revString + u;
        }
        else{
            revString+= input[index];
        }
    }

    var mainString = revString + subString;
    return mainString;
}

var a = 'i';
var b = 'o';
var c = a + b;
console.log(c);

const user = readline.question('Type a String:- ');
console.log(encryptMessage(user));