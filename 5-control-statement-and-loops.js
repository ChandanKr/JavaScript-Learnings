// 3 Control Statements:
//     1. If...Else
//     2. Switch Statements
//     3. Conditional (Ternary Operator)

// 5 Loops:
//     1. While Loop
//     2. Do-While Loop
//     3. For Loop
//     4. For in Loop 
//     5. For of Loop

console.log("*******If...Else*******");

// if (condition) {
//     // Code to be executed if condition is true
// } else {
//     // Code to be executed if condition is false
// }

// var tomorrow = 'raining';
var tomorrow = 'sunny';
if (tomorrow == 'raining') {
    console.log("Take your raincoat...");
} else {
    console.log("No need to take your raincoat...");
}
//--------------------------------------------------------------------

console.log("*******Switch Statements*******");
// switch (expression) {
//     case value1:
//         // Code to be executed if expression matches value1
//         break;
//     case value2:
//         // Code to be executed if expression matches value2
//         break;
//     default:
//         // Code to be executed if expression doesn't match any case
// }
// var area = "circle";
// var area = "triangle";
// var area = "rectangle";
var area = "wrongdata";
var pi = 3.142, l = 5, b = 4, r = 6;

switch (area){
    case "circle":
        console.log("The are of the circle is: " + pi * r**2 + " sq. units.");
        break;
    case "triangle":
        console.log("The are of the triangle is: " + (l * b) / 2 + " sq. units.");
        break;
    case "rectangle":
        console.log("The are of the rectangle is: " + (l * b) + " sq. units.");
        break;
    default:
        console.log("Please enter valid data....");
}

//--------------------------------------------------------------------

console.log("*******Conditional (Ternary Operator)*******");
// The conditional operator, often referred to as the ternary operator, provides a concise way to express conditional statements. 
// Its syntax is:
    // condition ? expression1 : expression2
        // condition is evaluated first.
        // If condition is true, expression1 is executed.
        // If condition is false, expression2 is executed.
    // The result of the entire expression is the value of the executed expression (expression1 or expression2).

    var myAge = 26;
    var myStatus = (myAge >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
    console.log(myStatus); // You are eligible to vote.

//--------------------------------------------------------------------

console.log("*******While Loop*******");
// while (condition) {
//     // Code to be executed as long as condition is true
// }
var num = 1;
while(num <= 10){
    console.log(num);
    num++;
}

//--------------------------------------------------------------------

console.log("*******Do-While Loop*******");
// do {
//     // Code to be executed at least once, then repeat as long as condition is true
// } while (condition);
var number = 1;
do {
    console.log(number);
    number++;
} while (number <= 10);

//--------------------------------------------------------------------

console.log("*******For Loop*******");
// for (initialization; condition; increment/decrement) {
//     // Code to be executed in each iteration
// }
for (var num = 1; num <= 5; num++) {
    console.log(num);
}
//--------------------------------------------------------------------

console.log("*******For in Loop*******");
// for (variable in object) {
//     // Code to be executed for each property
// }
var obj = {a: 1, b: 2, c: 3};
for (var key in obj) {
    console.log(key + ": " + obj[key]);
}

//--------------------------------------------------------------------

console.log("*******For of Loop*******");
// for (variable of iterable) {
//     // Code to be executed for each element
// }
var arr = [1, 2, 3];
for (var element of arr) {
    console.log(element);
}
