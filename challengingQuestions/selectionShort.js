const arr = [6, 1, 7, 8, 9, 3, 5, 4, 2];

function findMinNum(index, arr){
    var index_of_min_index;
    var min = arr[index];
    for(index; index<arr.length; index++){
        if(min>arr[index]){
            min = arr[index];
            index_of_min_index = index;
        }
    }
    return index_of_min_index;
}

var index = 0;
var exchanged_num;
for(index; index<arr.length; index++){
    var arr_index = index;
    var min_index = findMinNum(arr_index, arr);
    var min_num = arr[min_index];
    exchanged_num = arr[index];
    if(min_num == undefined){
        continue;
    }
    else{
        arr[index] = min_num;
        arr[min_index] = exchanged_num;
    }
}

console.log(arr);