//todo: PRACTICE TIME

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

//! What will be the output of 3**3?
console.log(3**3); // 27 => represents 3 raised to the power of 3
console.log(10**-1); // 1/10 = 0.1 => represents 10 raised to the power of -1

//!  What will be the output when we add a number and a string?
console.log(4 + "Chandan"); // 4Chandan => the number 4 is converted to a string "4", and then it's concatenated with the string "Chandan", resulting in "4Chandan".

//! WAP  to swap two numbers.
var firstNumber = 5;
var secondNumber = 10;
console.log("Before swapping, First Number: ", firstNumber);
console.log("Before swapping, Second Number: ", secondNumber);

var tempNumber = secondNumber; // tempNumber = 10
secondNumber = firstNumber; // secondNumber = 5
firstNumber = tempNumber; // firstNumber = 10
console.log("After swapping, First Number: ", firstNumber);
console.log("After swapping, Second Number: ", secondNumber);

//! WAP  to swap two numbers without using third variable.
var a = 5;
var b = 10;

a = a+b; // 5+10 => a = 15
b = a-b; // 15-10 => b = 5
a = a-b; // 15-5 => a = 10

console.log("After swapping, a: ", a); // After swapping, a:  10
console.log("After swapping, b: ", b); // After swapping, b:  5

//! What is the difference between == and === ?
var num1 = 5;
var num2 = "5";

console.log(num1 == num2); // true
console.log(num1 === num2); // false

//---------------------------------------------------------------
console.log("****From 5-control-statement-and-loops.js****");

//! WAP that works out whether a given year is a leap year or not?
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

//! WAP to print table for given numbers - 8, 9, 12, 15 using for loop.

// var number = 8;
// var number = 9;
// var number = 12;
var number = 15;
 
for(var i = 1; i <= 10; i++){
    console.log(i * number);
}

//---------------------------------------------------------------
console.log("****From '6-functions.js'****");

//* Calculator Function
//! Write a JS function calculator that takes two numbers and an operator as a parameter and returns the operation. The function should support addition, subtraction, multiplication, division and modulus.

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



//* Reverse a String
//! Write a function to reverse a given string without using the built-in reverse method.

const isReversed = (originalString) => {
    var reversedString = "";
    for(let char = originalString.length-1; char >= 0; char--){
        reversedString = reversedString + originalString[char];
    }
    console.log(reversedString);
};

isReversed("chandan kumar");

//* Palindrome Check: string or number remains same when it is reversed
//! Write a function to determine if a given string is a palindrome or not.

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

//! WAP to multiply each element with 2
    let arr = [2, 5, 7, 4, 9, 3];

    arr.forEach((currentElement) => {
        console.log(currentElement * 2);
    });


    const doubleValue = arr.map((currentElement) => {
        return currentElement * 2;
    });

    console.log(doubleValue);

//! Add "December" at the end of an array i.e. months = ['Jan', 'March', 'April', 'June', 'July']

    // Using push() method
    let months1 = ['Jan', 'march', 'April', 'June', 'July'];
    months1.push("December");
    console.log(months1);

    // Using splice() method
    let months2 = ['Jan', 'march', 'April', 'June', 'July'];
    months2.splice(months2.length, 0, "December");
    console.log(months2);

//! What is the return value of splice method?
    // console.log(months2.splice(months2.length, 0, "December"));
    // It will return an empty array.

//! Update the element of month1 "march" to "March".
    const marchIndex = months1.indexOf("march");
    months1.splice(marchIndex, 1, "March");
    console.log(months1);

//! Delete "June" from months2
    months2.splice(months1.indexOf("June"), 1);
    console.log(months2);


//! Cart Update: In e-commerce website, when we want to remove/delete any product from addToCart page.
//* Let say user wants to delete value 6 from [1, 2, 3, 4, 6, 5, 6, 7, 8, 9]
    let cart = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
    let value = 6;

    let updatedCart = cart.filter((currElem) => {
        return currElem !== value;
    })

    console.log(updatedCart);

//! Given an array of products where each product has a name and a price, write a function that uses the filter method to return an array containing only the products with a "price less than or equal to 500".

    const products =[
        { name: "Laptop", price: 1200 },
        { name: "Phone", price: 800 },
        { name: "Tablet", price: 700 },
        { name: "Smartwatch", price: 400 },
        { name: "Neckband", price: 150 },
        { name: "Bluetooth Speaker", price: 500 },
        { name: "Mouse", price: 150 },
        { name: "Television", price: 1000 }
    ];

    const filteredProducts = products.filter((currElem) => {
        return currElem.price >= 500 ;
    });

    console.log(filteredProducts);

//! Filter unique values from given arrays
    const values = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

    let uniqueValues = values.filter((currElem, index, arr) => {
        return arr.indexOf(currElem) == index;
    });
    console.log(uniqueValues);

    //OR, with SET and SPREAD Operator

    console.log([...new Set(values)]);


//! Use map to square each number and create a new array
     const squareNumbers  = [2, 5, 6, 8 , 4];

     const newSquareNumbers = squareNumbers.map((a) => a**2);
     console.log(newSquareNumbers);

//! Using map method, WAP that takes an array of strings and returns a new array where each string is uppercased.
    const simpleString = ["apple", "banana", "cherry", "date"];

    const uppercasedString = simpleString.map((currElem) => {
        return currElem.toUpperCase();
    });
    console.log(uppercasedString); // Output: [ 'APPLE', 'BANANA', 'CHERRY', 'DATE' ]

//! Using map method, WAP that takes an array of numbers and returns a new array where each number is squared, but only if it is an even number.
    const simpleNumbers = [3, 5, 6, 8, 21, 20, 67, 18];

    const sqEvenNumbers = simpleNumbers.map((currElem) => {
        return currElem % 2 === 0 ? currElem ** 2 : "rejected";
    }).filter((currElem) => currElem !== "rejected");
    console.log(sqEvenNumbers); // Output: [ 36, 64, 400, 324 ]


//! Using map method, WAP that takes an array of names and returns a new array where each name is prefixed with "Mr. ".
    const simpleNames = ["Ram", "Laxman", "Barat", "Shatrughan"];

    const prefixedNames = simpleNames.map((currElem) => `Mr. ${currElem}`);
    console.log(prefixedNames); // Output: [ 'Mr. Ram', 'Mr. Laxman', 'Mr. Barat', 'Mr. Shatrughan' ]


//! Using Reduce method, WAP that calculates the total price of items in a shopping cart. The function should take an array of item prices as input and return the total price.
    const cartValue = [400, 500, 300, 2300, 1000];

    const totalCartValue = cartValue.reduce((accumulator, currElem) => {
        return accumulator + currElem;
    }, 0);

    console.log(totalCartValue); // Output: 4500

//---------------------------------------------------------------
console.log("****From '8-string.js'****");

//! Find Output of below code

    let strValue = "This file is all about of JavaScript Interview Questions!!"

    console.log(strValue.slice(1)); // Output: his file is all about of JavaScript Interview Questions!!
    console.log(strValue.replace("all", "All")); // Output: This file is All about of JavaScript Interview Questions!!
    console.log(strValue.substring(1)); // Output: his file is all about of JavaScript Interview Questions!!

//! Write a JavaScript function that prints the letter 'a' through 'z' in the console. [ HINT: You should use a loop to iterate through the letters and prnt each one in a new line. ]
    // console.log("a".charCodeAt(0)); // Output: 97
    // console.log("z".charCodeAt(0)); // Output: 122

    // console.log(String.fromCharCode(97)); // Output: a
    // console.log(String.fromCharCode(122)); // Output: z

    for(let i = 97; i <= 122; i++){
        console.log(String.fromCharCode(i));
    }

//! Write a JavaScript function to count the number of vowels in a string.

    const numberOfVowels = ((string) => {
        let vowels = "aeiouAEIOU"
        let count = 0;
        for(let char of string){
            if(vowels.includes(char)){
                count++;
            }
        }
        return count;
    });

    console.log("Total Vowels Present in \"CHANDAN\": ",numberOfVowels("CHANDAN")); // Output: Total Vowels Present in "CHANDAN":  2
    console.log("Total Vowels Present in \"Chandigarh University\": ",numberOfVowels("Chandigarh University")); // Output: Total Vowels Present in "Chandigarh University":  7

//! Write a JavaScript function to check if all the vowels presents in a string or not?

    const isAllVowelsPresent = ((str) => {
        let vowels = 'aeiou';

        for(let char of vowels){
            if(!str.includes(char)){
                return "BIG NO";
            }
        }
        return "Of course, YES";
    });

    console.log("Is All Vowels Present in \"your name is chandan\"? ",isAllVowelsPresent("your name is chandan")); // Output: Is All Vowels Present in "your name is chandan"?  Of course, YES

    console.log("Is All Vowels Present in \"my name is chandan\"? ",isAllVowelsPresent("my name is chandan")); // Output: Is All Vowels Present in "my name is chandan"?  BIG NO

//! Write a JavaScript function isPangram to check given string is a Pangram or NOT? The function should be case-insensitive and ignore spaces.

    //todo:- Pangram means a string that contains all letters of the alphabet.

    //! Constraints: 
        //* 1. The input string will consist of alphabetic characters and spaces.
        //* 2. The function should handle both uppercase and lowercase letters.
        //* 3. Consider the English alphabet with 26 letters.
        //* 4. The function should handle special characters also.

    const isPangram = ((givenString) => {
        // Converting string into array elements with characters of the string
        let inputArray = givenString.toLowerCase().split("");

        // Filtering characters other than a-z
        const values = inputArray.filter((currElem) => {
            let aCharCode = "a".charCodeAt(); // 97
            let zCharCode = "z".charCodeAt(); // 122
            return (currElem.charCodeAt() >= aCharCode && currElem.charCodeAt() <= zCharCode);
        });

        // Removing duplicate values and store in a pure array by using spread operator(...)
        let pureArray = [...new Set(values)];

        return pureArray.length === 26 ? "Yes, it is a Pangram" : "No, It's not a Pangram";
    });
    console.log(isPangram("A quick brown fox jumps over the lazy dog.")); // Output: Yes, it is a Pangram
    console.log(isPangram("A quick green fox jumps over the lazy dog.")); // Output: No, It's not a Pangram

//---------------------------------------------------------------
console.log("****From '14-date-and-time-objects.js'****");

//! Write a function to add a specified number of days to a given date.
    // Given Date = "2024-03-29"

    const addDaysToDate = (date, extraDay) => {
        let updatedDate = date.setDate(date.getDate() + extraDay);
        let updatedDateAfterAddingExtraDay = new Date(updatedDate);
        return updatedDateAfterAddingExtraDay;
    };

    const givenDate = new Date("2024-03-29");
    console.log(givenDate.toLocaleDateString()); // Output: 29/3/2024

    const newDate = addDaysToDate(givenDate, 7);
    console.log(newDate.toLocaleDateString()); // Output: 5/4/2024

//! Write a function to calculate the difference in days between two given dates.
    // Given: 
        // Date1 = "2024-02-19"
        // Date2 = "2024-02-29"
    
    const getDaysDifference = (date1, date2) => {
        let difference = Math.abs(date2 - date1);
        let oneDayInMS = 24 * 60 *60 * 1000;

        return Math.floor(difference / oneDayInMS);
    };

    const date1 = new Date("2024-02-19");
    const date2 = new Date("2024-02-29");
    // getDaysDifference(date1, date2);
    console.log(getDaysDifference(date1, date2)); // Output: 10
    
//---------------------------------------------------------------
console.log("****From '15-time-based-events.js'****");

//! WAP that defines a function called repeatedFunction. 
    
    //! This function should log the message "This function repeats every 1000 milliseconds." to the console. 

    //! Then, set up an interval using setInterval() to call repeatedFunction every 1000 ms. 

    //! Additionally, after 10 seconds have elapsed, use setTimeout() to clear the interval previously set up.

    //! Make sure to log the message "Interval cleared after 10 seconds..." when the interval is cleared.

    const repeatedFunction = () => {
        console.log("This function repeats every 1000 milliseconds.");
    };

    const intervalID = setInterval(repeatedFunction, 1000);

    setTimeout(() => {
        clearInterval(intervalID);
        console.log("Interval cleared after 10 seconds...");
    }, 10000);