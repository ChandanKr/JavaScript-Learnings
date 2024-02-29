// Functions are blocks of reusable code that can be defined and called upon to perform a specific task. 

// Function Definition (Function Declaration / Function Statement)
// Calling a Function
// Function Parameter
// Function Arguments
// Function Expressions
// Return Statement
// Anonymous Function

console.log("*******Function Definition**********");
// Before we use a function, we must have to define it.
// A function definition consists of "function" keyword, followed by:
    // The name of the function.
    // A list of parameters to the function, enclosed in parentheses and separated by commas.
    // The JavaScript statements that define the function, enclosed in curly brackets, { .... }.

function sum () { // defining a function
    var a = 5, b = 10;
    var total = a + b;
    console.log("Total sum is: ", total); // task
}

//---------------------------------------------------------------------------
console.log("*******Calling a Function**********");
// Defining a function doesn't execute it.
// A JavaScript is executed when "something" invokes it (calls it).

sum (); // we are calling function "sum".

//---------------------------------------------------------------------------
console.log("*******Function Parameter**********");
// Function Parameters are the placeholders for the actual values listed in the function's definition.

function greet(name) { // 'name' is a parameter here.
    console.log("Hello, " + name + "!!");
}

//---------------------------------------------------------------------------
console.log("*******Function Argument**********");
// Function Arguments are the actual values that are passed to the function.

greet("Chandan"); // "Chandan" is an argument passed to the function.


//---------------------------------------------------------------------------
console.log("*******Function Expressions**********");
// Function Expressions simply means create a function and put it into the variable.

let greetings = function(name) { // Function expression
    console.log("Hello, " + name + " !!");
};

greetings("Champ"); // Calling the function


//---------------------------------------------------------------------------
console.log("*******Return Statement**********");
// In JavaScript, the return statement is used to specify the value that a function should return when it's called.
function multiply(a, b){
    return a * b;
}

var totalMultipliedValue = multiply(5, 8);
console.log("Total Multiplied Value: ", totalMultipliedValue);

// The return statement can also be used to exit the function early, without necessarily returning a value. 
function greet(name) {
    if (!name) {
        return; // Exit the function early if no name is provided
    }
    return "Hello, " + name + "!";
}

console.log(greet("Chandan")); // Output: Hello, Chandan!
console.log(greet()); // Output: undefined (because no name is provided)


//---------------------------------------------------------------------------
console.log("*******Anonymous Statement**********");
// An anonymous function is a function defined without a name. It's often used as a callback function or as a function expression assigned to a variable.
var funcAnonymous = function(a, b){
    return a + b;
}
console.log("Sum is: ", funcAnonymous(5,8));