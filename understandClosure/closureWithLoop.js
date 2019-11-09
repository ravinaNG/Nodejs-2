function outer(){
    var arr = [];
    var i;
    for (i=0; i<4; i++){
        arr[i] = function(){ return i;}
    }
    return arr;
}

var get_arr = outer();

console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());
