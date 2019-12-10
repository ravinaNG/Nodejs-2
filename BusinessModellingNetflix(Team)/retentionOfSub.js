// const json = require('JSON');

function retentionListOfSubs(){
    const salesPerson = 1
    const trailPerson = 20
    const amtPerSub = 650
    const noShow = 40
    const numberOfWorkingDays = 28
    const revenu = 40
    const year = 5
    const dicOfSubscribedList = {}
    var month = 1
    for(month; month<=60; month++){
        sinUp = salesPerson*trailPerson*numberOfWorkingDays;
        var firstSubs = sinUp-(sinUp*noShow/100)
        var subscribedList = []
        var retentionList = [85,75,65,60,57,54,51,49,46,43,41,38]
        var retentionM = 0
        for (retentionM; retentionM<retentionList.length; retentionM++){
            subscribedList.push(firstSubs*retentionList[retentionM]/100)
        }
        var str = "month" + month;
        dicOfSubscribedList[str] = subscribedList;
    }
    return dicOfSubscribedList;
}

const listOfRetentions = retentionListOfSubs();
const jsonData = JSON.parse(listOfRetentions);
console.log(jsonData);