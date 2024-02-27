// PRACTICE TIME

//-----------------------------------------------------
// From "3-data-types.js"

var practiceTime = 10 + "20";
console.log(practiceTime, typeof(practiceTime)); // 1020 string

var practiceTime = 20 - "10";
console.log(practiceTime, typeof(practiceTime)); // 10 number

var practiceTime = 10 + 20 + "30";
console.log(practiceTime, typeof(practiceTime)); // 3030 string

var practiceTime = 10 + "20" + 30;
console.log(practiceTime, typeof(practiceTime)); // 102030 string

var practiceTime = "10" + 20 + 30;
console.log(practiceTime, typeof(practiceTime)); // 102030 string

var practiceTime = "Java" + "Script";
console.log(practiceTime, typeof(practiceTime)); // JavaScript string

var practiceTime = " " + " ";
console.log(practiceTime, typeof(practiceTime)); //    string  => empty string

var practiceTime = " " + 0;
console.log(practiceTime, typeof(practiceTime)); //  0 string

var practiceTime = "Chandan" - "Kumar";
console.log(practiceTime, typeof(practiceTime)); // NaN number
console.log(isNaN(practiceTime)); // true

var practiceTime = "chandan" - "kumar";
console.log(practiceTime, typeof(practiceTime)); // NaN number

var practiceTime = true + true;
console.log(practiceTime, typeof(practiceTime)); // 2 number

var practiceTime = true - true;
console.log(practiceTime, typeof(practiceTime)); // 0 number

var practiceTime = false + false;
console.log(practiceTime, typeof(practiceTime)); // 0 number

var practiceTime = false - false;
console.log(practiceTime, typeof(practiceTime)); // 0 number

var practiceTime = true + false;
console.log(practiceTime, typeof(practiceTime)); // 1 number

var practiceTime = false + true;
console.log(practiceTime, typeof(practiceTime)); // 1 number

var practiceTime = true - false;
console.log(practiceTime, typeof(practiceTime)); // 1 number

var practiceTime = false - true;
console.log(practiceTime, typeof(practiceTime)); // -1 number

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Number.NaN)); // true
console.log(Number.isNaN(NaN)); // true

// --------------------------------------------------------------------------------------
// From "4-expressions-and-operators.js"

// What will be the output of 3**3?
console.log(3**3); // 27 => represents 3 raised to the power of 3
console.log(10**-1); // 1/10 = 0.1 => represents 10 raised to the power of -1

//  What will be the output when we add a number and a string?
console.log(4 + "Chandan"); // 4Chandan => the number 4 is converted to a string "4", and then it's concatenated with the string "Chandan", resulting in "4Chandan".

// WAP  to swap two numbers.
var firstNumber = 5;
var secondNumber = 10;
console.log("Before swapping, First Number: ", firstNumber);
console.log("Before swapping, Second Number: ", secondNumber);

var tempNumber = secondNumber; // tempNumber = 10
secondNumber = firstNumber; // secondNumber = 5
firstNumber = tempNumber; // firstNumber = 10
console.log("After swapping, First Number: ", firstNumber);
console.log("After swapping, Second Number: ", secondNumber);

// WAP  to swap two numbers without using third variable.
var a = 5;
var b = 10;

a = a+b; // 5+10 => a = 15
b = a-b; // 15-10 => b = 5
a = a-b; // 15-5 => a = 10

console.log("After swapping, a: ", a); // After swapping, a:  10
console.log("After swapping, b: ", b); // After swapping, b:  5

// What is the difference between == and === ?
var num1 = 5;
var num2 = "5";

console.log(num1 == num2); // true
console.log(num1 === num2); // false