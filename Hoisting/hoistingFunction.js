isItHoisted();

function isItHoisted(){
    console.log('Yes!');
}

catName('Guddu');

function catName(Name) {
    console.log('My cat name is ' + Name + ' ;)')
}

/* Conceptually, for example, a strict defination of 
hoisting suggests that variable and function declarations
are physically moved to the top of your code, but this is
not in fact what happens.
Instead, the variable and function declaration 
are put into memory during the compile phase,
but stay exactly where you typed them in your code.*/

// Only declarations are hoisted.