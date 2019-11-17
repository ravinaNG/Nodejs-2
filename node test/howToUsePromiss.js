var promise = function(input){
    return new Promise(function(resolve, reject){
    if(input === "Ravina"){
        resolve("Hello Kutti !");
    }
    else{
        reject("Some error");
    }
})};

promise("Ravina")
.then(function(message){
    console.log(message);
})
.then(function(message){
    console.log("Hii");
})
.then(function(message){
    console.log("I am Ravina;)");
})
.catch(function(err){
    console.log(err);
}); 

