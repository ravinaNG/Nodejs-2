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
for(index; index<arr.length; index++){
    console.log("shorting.....")
    var arr_index = index;
    var min_index = findMinNum(arr_index, arr);
    var min_num = arr[min_index];
    exchanged_num = arr[index];
    arr[index] = min_num;
    arr[min_index] = exchanged_num;
}

console.log(arr);