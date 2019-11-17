const wellCome = function(){
    console.log("WellCome to my Avoiding callBack hell code.");
}

const add = function(){
    setTimeout(function (){
        console.log("5 + 6 = ", 5+6);
    }, 100);
}

const bye = function(){
        console.log("Bye Bye .....");
}

wellCome().then.add().bye()

// function WellCome(){
//     console.log("WellCome to my Avoiding callBack hell code.");
// }
// function add(){
//     setTimeout(function (){
//         console.log("5 + 6 = ", 5+6);
//     }, 100);
// }
// function bye(){
//     console.log("Bye Bye .....");
// }

// WellCome()
// add()
// bye() 