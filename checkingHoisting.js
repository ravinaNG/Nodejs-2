{
    zoo = {};
    console.log('zoo', zoo);
    const zoo;
}

// var declaration are hoisted. They are hoisted to the top of the function scope

// A regular code block does not limit the hoisting

// hoisting doesn't include assignment.

var zoo; // implicitly declared
console.log('zoo', zoo); // zoo undefined

{
    zoo = {};
    console.log('zoo', zoo);
    let zoo; // Reference Error
}

// let and const variables are not hoisted 