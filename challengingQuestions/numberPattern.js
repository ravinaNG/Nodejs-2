const readlineSync = require('readline-sync');
const user = readlineSync.question('Enter your number :- ');
var count = 1;
var countDigitsOfRow = 1;
let row = '';
var incrimntCountDigitsOfRow = 1;

for(count; count < user; count++){
    if(countDigitsOfRow>0){
        row = count + '  ';
        countDigitsOfRow --;
    }
    else{
        console.log(row);
        row = '';
        countDigitsOfRow = incrimntCountDigitsOfRow + 1;
        incrimntCountDigitsOfRow = countDigitsOfRow;
    }
}

// let str = '',i=1;
// while(i<=10){
//     str += i+'  ';
//     i += 1;
// }

// console.log(str);