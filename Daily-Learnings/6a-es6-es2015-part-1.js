//! ES6 Part 1:
    // LET vs CONST vs VAR
    // Template Literals
    // Default Parameters
    // Arrow Function



console.log("*****LET vs CONST vs VAR*****");
// var => Function Scope
// let and const => Block Scope


// keyword	        const   let	    var
// global scope	    no      no	    yes
// function scope	yes	    yes	    yes
// block scope	    yes	    yes	    no
// re-assign	    no	    yes	    yes
// re-declare       no      no      yes
// hoisted          no      no      yes

// Global Scope => Anywhere in the code
// Function Scope => inside a function
// Block Scope => inside a block, i.e. {}

//----------------------------------------------------------------------

console.log("*****Template Literals*****");

// ${....} with backticks (` `)

// WAP to create a table of a number using template literals
function tableOf(num){
    for(var i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

tableOf(15);

//-----------------------------------------------------------------------

console.log("*****Default Parameters*****");
// Default parameters in JavaScript allow you to specify default values for function parameters if no value or undefined is passed when the function is called.

function greet(name = 'Anonymous') {
    console.log('Hello, ' + name + '!');
}

greet(); // Output: Hello, Anonymous!
greet('Chandan'); // Output: Hello, Chandan!


// If there are two or more than two parameters

function mult(a, b=5){
    console.log(a*b);
}

mult(9); // since only one argument provided, it'll consider a=9 and b will be default value that is 5, Output: 9*5=45
mult(9, 8) // since both arguments provided, it'll ignore default value of 5, then Output: 9*8=72

//---------------------------------------------------------------------------

console.log("*****Arrow Function*****");

// Traditional Way of Writing Function
function sumWithTrad(a, b){
    console.log(`Total Sum with Traditional Function: ${a + b}`);
}

sumWithTrad(4, 6);

// Arrow Function - Modern Way of Writing
const sumWithArrow = (a, b) => {
    console.log(`Total Sum with Arrow Function: ${a + b}`);
}

sumWithArrow(4, 6);


// if there is only one line of task in arrow function:
const sumWithArrowFunc = (a, b) => console.log(`Total Sum with Arrow Function without use of blocks: ${a + b}`);

sumWithArrowFunc(5,10);