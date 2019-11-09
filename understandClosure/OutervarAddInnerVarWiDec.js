function foo(outer_arg){
    function inner(inner_arg){
        return outer_arg+inner_arg;
    }
    return inner;
}

var get_func_inner = foo(5);

console.log(get_func_inner(4));
console.log(get_func_inner(3));