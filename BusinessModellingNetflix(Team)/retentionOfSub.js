// const json = require('JSON');

function retentionListOfSubs(){
    const salesPerson = 1;
    const trailPerson = 20;
    const noShow = 40;
    const numberOfWorkingDays = 28;
    const dicOfSubscribedList = {};
    let month = 1

    for(month; month<=60; month++){
        sinUp = salesPerson*trailPerson*numberOfWorkingDays;
        const firstSubs = sinUp-(sinUp*noShow/100)
        const subscribedList = []
        const retentionList = [85,75,65,60,57,54,51,49,46,43,41,38]
        let retentionM = 0;
        subscribedList.push(firstSubs);

        for (retentionM; retentionM<retentionList.length; retentionM++){
            const retentionOfMonth = firstSubs*retentionList[retentionM]/100;
            const intoInt = Math.floor(retentionOfMonth);
            subscribedList.push(intoInt);
        }
        var str = "month" + month;
        dicOfSubscribedList[str] = subscribedList;
    }
    return dicOfSubscribedList;
}

const listOfRetentions = retentionListOfSubs();
// const jsonData = JSON.parse(listOfRetentions);
console.log(JSON.stringify(listOfRetentions));