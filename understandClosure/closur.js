var init = (function(){
  var name = [];
  return function(){
    name.push("komal");
    return name
  }
});



console.log(init()());
// console.log(init());
// console.log(init());

// var add = function () {
//     var counter = 0;
//     return function () {
//       counter += 1; 
//       return counter}
//   }();

//   console.log(add());
//   console.log(add());
//   console.log(add());


