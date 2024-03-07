//* In JavaScript, the Math object is a built-in object that provides various properties and methods for mathematical operations.

//* Math works with the Number type, it doesn't work with BigInt.

//todo:- Topics to cover:

    //? Constant Properties:
        //* 01. Math.PI
        //* 02. Math.E

    //? Methods:
        //* 01. Math.round()
        //* 02. Math.floor()
        //* 03. Math.ceil()
        //* 04. Math.abs()
        //* 05. Math.max() and Math.min()
        //* 06. Math.pow()
        //* 07. Math.sqrt()
        //* 08. Math.random()

        //? ES6 - 2015 Addition
        //* 09. Math.trunc()
        //* 10. Math.sign()

//---------------------------------------------------------------------
console.log("*******Math.PI Property*******");

//! Math.PI => Represents the mathematical constant π (pi), approximately 3.14159
    console.log(Math.PI); // Output: 3.141592653589793 

//---------------------------------------------------------------------
console.log("*******Math.E Property*******");

//! Math.E: Represents the base of natural logarithms, approximately 2.718
    console.log(Math.E); // Output: 2.718281828459045

//---------------------------------------------------------------------
console.log("*******Math.round() method*******");

//! Math.round() => Returns the value of a number x rounded to the nearest integer.

    console.log(Math.round(4.6)); // Output: 5
    console.log(Math.round(4.1)); // Output: 4
    console.log(Math.round(4.5)); // Output: 5
    console.log(Math.round(4.49)); // Output: 4
    console.log(Math.round(-20.5)); // Output: -20
    console.log(Math.round(-20.51)); // Output: -21

//---------------------------------------------------------------------
console.log("*******Math.floor() method*******");

//! Math.floor() => Returns the largest integer less than or equal to a given number x.

    // Always rounds DOWN to the nearest integer

    console.log(Math.floor(4.9)); // Output: 4
    console.log(Math.floor(4.1)); // Output: 4

//---------------------------------------------------------------------
console.log("*******Math.ceil() method*******");

//! Math.ceil() => Returns the smallest integer greater than or equal to a given number x.

    // Always rounds UP to the nearest integer

    console.log(Math.ceil(4.9)); // Output: 5
    console.log(Math.ceil(4.1)); // Output: 5

//---------------------------------------------------------------------
console.log("*******Math.abs() method*******");

//! Math.abs(x) => Returns the absolute value of a number x.
    // in simple, how far the number is from 0
    // It will return always a positive number.
    console.log(Math.abs(-5)); // Output: 5
    console.log(Math.abs(4)); // Output: 4
  
//---------------------------------------------------------------------
console.log("*******Math.max() and Math.min() methods*******");

//! Math.max(x) => Returns the largest of the given numbers.
    console.log(Math.max(10, 20, 30)); // Output: 30
    
//! Math.min(x) => Returns the smallest of the given numbers.
    console.log(Math.min(10, 20, 30)); // Output: 10

//---------------------------------------------------------------------
console.log("*******Math.pow() method*******");

//! Math.pow() => Returns the base x raised to the exponent y.
    console.log(Math.pow(2, 3)); // Output: 8 => 2*2*2=8

//---------------------------------------------------------------------
console.log("*******Math.sqrt() method*******");

//! Math.sqrt() => Returns the number whose square root is the givent number.
    console.log(Math.sqrt(25)); // Output: 5

//---------------------------------------------------------------------
console.log("*******Math.random() method*******");

//! Math.random() => Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
    console.log(Math.random()); // Output: A random number between 0 and 1
    console.log(Math.random() * 10); // Output: A random number between 0 and 1, then multiply with 10
    
    console.log(Math.round(Math.random() * 100)); // Output: A random number between 0 and 1, then multiply with 10, then round off the value, basically a random number between 0-100

    //! .toFixed(value) => If you want certain digits only after the decimal

    console.log((Math.random() * 100).toFixed(2)); // Output: a random number between 0-100 with anly two digits after the decimal, e.g. 27.33, 41.06

//---------------------------------------------------------------------
console.log("*******Math.trunc() method*******");

//! Math.trunc() => Returns the integer part of a number by removing any fractional digits without rounding.
    // removes the decimal part of the number, returning only the integer component.
    console.log(Math.trunc(4.9)); // Output: 4
    console.log(Math.trunc(-4.9)); // Output: -4
    console.log(Math.trunc(0.123)); // Output: 0
    console.log(Math.trunc(-0.123)); // Output: -0 (Note: -0 is considered as 0 in JavaScript)
    console.log(Math.trunc(42)); // Output: 42 (No fractional part, so the number remains unchanged)
