// PRACTICE TIME

//-----------------------------------------------------
console.log("****From 3-data-types.js****");

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

// -------------------------------------------------------------------------
console.log("****From 4-expressions-and-operators.js****");

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

//---------------------------------------------------------------
console.log("****From 5-control-statement-and-loops.js****");

//WAP that works out whether a given year is a leap year or not?
//Conditions to be a leap year: 
    // 1. Should be divisible by 4.
    // 2. Should not be divisible by 100.
    // 3. Should be divisible by 400.

var year = 2000;
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("Yes, " + year + " is a leap year [as it is divisible by 4, 100 and 100]");
        }
        else{
            console.log("No, " + year + " is not a leap year [as it is not divisible by 400]");
        }
    }
    else{
        console.log("Yes, " + year + " is a leap year [as it is divisible by 4 and not divisible by 100]");
    }
}
else{
    console.log("No, " + year + " is not a leap year [as it is not divisible by 4]");
}

// WAP to print table for given numbers - 8, 9, 12, 15 using for loop.

// var number = 8;
// var number = 9;
// var number = 12;
var number = 15;
 
for(var i = 1; i <= 10; i++){
    console.log(i * number);
}

//---------------------------------------------------------------
console.log("****From '6-functions.js'****");

// Calculator Function
// Write a JS function calculator that takes two numbers and an operator as a parameter and returns the operation. The function should support addition, subtraction, multiplication, division and modulus.

function calculator(num1, num2, operation){
    switch (operation) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            if(num2 == 0){
                console.log("Sorry, can't divide by 0");
                break;
            }
            else{
                console.log(num1 / num2);
                break;
            }
        case "%":
            if(num2 == 0){
                console.log("Sorry, can't divide by 0");
                break;
            }
            else{
                console.log(num1 % num2);
                break;
            }
        default:
            console.log("Invalid Data...");
    }
}

calculator(5, 2, '+');
calculator(8, 4, '-');
calculator(5, 2, '*');
calculator(10, 5, '/');
calculator(10, 0, '/');
calculator(50, 3, '%');
calculator(50, 0, '%');
calculator(50, 3, '34%');



// Reverse a String
// Write a function to reverse a given string without using the built-in reverse method.

const isReversed = (originalString) => {
    var reversedString = "";
    for(let char = originalString.length-1; char >= 0; char--){
        reversedString = reversedString + originalString[char];
    }
    console.log(reversedString);
};

isReversed("chandan kumar");

// Palindrome Check: string or number remains same when it is reversed
// Write a function to determine if a given string is a palindrome or not.

const isPalindrome = (originalString) => {
    var reversedString = "";
    for(let char = originalString.length-1; char >= 0; char--){
        reversedString = reversedString + originalString[char];
    }
    console.log(originalString === reversedString ? `Yes, ${originalString} is a Palindrome String` : `No, ${originalString} is not a Palindrome String`);
};

isPalindrome("madam");
isPalindrome("chandan");

//---------------------------------------------------------------
console.log("****From '7-arrays.js'****");

// WAP to multiply each element with 2
    let arr = [2, 5, 7, 4, 9, 3];

    arr.forEach((currentElement) => {
        console.log(currentElement * 2);
    });


    const doubleValue = arr.map((currentElement) => {
        return currentElement * 2;
    });

    console.log(doubleValue);

// Add "December" at the end of an array i.e. months = ['Jan', 'March', 'April', 'June', 'July']

    // Using push() method
    let months1 = ['Jan', 'march', 'April', 'June', 'July'];
    months1.push("December");
    console.log(months1);

    // Using splice() method
    let months2 = ['Jan', 'march', 'April', 'June', 'July'];
    months2.splice(months2.length, 0, "December");
    console.log(months2);

// What is the return value of splice method?
    // console.log(months2.splice(months2.length, 0, "December"));
    // It will return an empty array.

// Update the element of month1 "march" to "March".
    const marchIndex = months1.indexOf("march");
    months1.splice(marchIndex, 1, "March");
    console.log(months1);

// Delete "June" from months2
    months2.splice(months1.indexOf("June"), 1);
    console.log(months2);
