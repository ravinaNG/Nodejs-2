const arr = [5, 3, 4, 7, 2, 55, 2, 8, 0, 6, 9, 1]

function checkingBackword(lastIndexNum, arr){
    var index = lastIndexNum;
    for(index; index>0; index--){
        if(arr[index-1] > arr[index]){
            var firstElement = arr[index-1];
            arr[index-1] = arr[index];
            arr[index] = firstElement;
        }
    }
}

var count = 0;
for(count; count< arr.length; count++){
    if(count == (arr.length)-1){
        checkingBackword(count, arr);
    }
    else{
        if(arr[count] > arr[count+1]){
            var nextIndex = count+1;
            checkingBackword(nextIndex, arr);
        }
        else if(arr[count] < arr[count-1]){
            checkingBackword(count, arr);
        }
    }
}

console.log(arr);