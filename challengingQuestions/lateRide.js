const link = "https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L"

function lateRide(n) {
    var hour = n/60;
    var minutes = n%60;

    var hour = parseInt(hour);

    var hourDegit = hour.toString()
    var minutesDegit = minutes.toString();

    function addDegit(arr){
        var index;
        var lateRide = 0;
        for(index = 0; index<arr.length; index++){
            degit = parseInt(arr[index]);
            lateRide = lateRide+degit;
        }
        return lateRide;
    }

    const hourDegitSum = addDegit(hourDegit);
    const minutesDegitSum = addDegit(minutesDegit);

    return (hourDegitSum+minutesDegitSum);
}

console.log(lateRide(808));