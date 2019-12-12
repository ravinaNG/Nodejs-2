let retentions = require('./retentionOfSub')

const amtPerSubscription = 650;
const revenue = 40;
const year = 5;
const inflationRate = 6;

// console.log(retentions['listOfRetentions']);

let rowM = 0;
let columnM = 0;
let dicOfRevenue = {};

for(rowM; rowM<60; rowM++){
    let numberOfSubscriber = 0;
    let revenueOfMoth = 0;
    let month = 'month';
    columnM = rowM;
    let count = 1;
    for(columnM; columnM >= 0; columnM --){
        month = "month" + count;
        numberOfSubscriber = numberOfSubscriber + retentions['listOfRetentions'][month][columnM];
        count = count + 1;
    }
    revenueOfMoth = numberOfSubscriber*amtPerSubscription*revenue/100;
    dicOfRevenue[month] = revenueOfMoth;
}

console.log(dicOfRevenue);