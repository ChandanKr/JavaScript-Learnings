
//! ES6 Part 2 - MODERN JAVASCRIPT:

    //?  Please refer "6a-es6-es2015-part-1.js" for Part 1
        // LET vs CONST vs VAR
        // Template Literals
        // Default Parameters
        // Arrow Function

    //todo: Topics to Cover in Part 2:
        //* Object Properties
        //* Destructuring
        //* Spread Operator
        //* Rest Parameters

//* =========================================
//*  Object Properties - Modern JavaScript
//* =========================================
    // const name = "Chandan";
    // const age = 26;

    //? traditional way
        // const person = { name: name, age: age }; 

    //? Using shorthand notation for object property (IF BOTH KEY AND VALUE ARE SAME)
        // const person = { name, age };
        // console.log(person);

    //TODO:- Instead of specifying name: name and age: age, you can simply use name and age directly within the object literal, thanks to ES6 shorthand property notation.

//* ==========================================
//*  Destructuring - Modern JavaScript
//* =========================================
    //? Destructuring in JavaScript is a way to extract values from arrays or objects and assign them to variables in a concise and readable manner.

    //? Use Case: Makes code cleaner and avoids repetitive copying of values.

    //* Destructuring Arrays:
    // Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables.

    //? 1: Extracting specific elements:
        // const numbers = [10, 20, 30];
        // const first = numbers[0]; // Traditional way
        // const [first, second, third] = numbers;
        // console.log(second);

    //? 2: Ignoring elements:
        // const [, , third] = numbers;
        // console.log(third);

    //! Interview Questions
    //! Write a program to swap two variables without using 3rd variable?
        // let a = 10;
        // let b = 30;
        // Output should be: a=30, b=10

        //? Mostly will do using 3rd var
        // let c = b; //c=30
        // b = a; // b=10
        // a = c; //a=30

        //? without using 3rd variable
        // [a, b] = [b, a];
        // console.log(a, b);

    //* Destructuring Objects:
        // const user = { name: "Chandan", age: 26 };

        //? Extracting properties:
        // const myName = user.name; // Traditional way

        // const { age, name } = user;
        // console.log(name, age);
        // console.log(age, name);

        //? Renaming properties:
        // const { name: fullName, age } = user; // Rename "name" to "fullName"
        // console.log(fullName);

//* ==========================================
//*  Spread Operator - Modern JavaScript
//* =========================================
    // JavaScript ES6 (ECMAScript 6) introduced the spread operator. The syntax is three dots(...) followed by the array (or iterable*).

    //? 1. Copying an array
    
        // let fruits = ["Apple", "Orange", "mango", "banana"];
        // let newFruits = [...fruits];
        // console.log(newFruits); // Output: ["Apple", "Orange", "mango", "banana"]

    //? 2: Concatenating arrays / Combining arrays
    
        // const numbers1 = [1, 2, 3, 4];
        // const numbers2 = [4, 5, 6];
        // const newNumbers = [...numbers1, ...numbers2];
        // console.log(newNumbers); // Output: [1, 2, 3, 4, 4, 5, 6]

    //? 3: Adding Elements to existing array
    
        // let fruits = ["Apple", "Orange", "mango", "banana"];

        // fruits.push("guava", "grapes"); // Traditional way

        // fruits.push(...["guava", "grapes"]);
        // console.log(fruits); // Output: [ 'Apple', 'Orange', 'mango', 'banana', 'guava', 'grapes' ]

    //! One more useCases
    //? In JavaScript, when you spread a string using the spread syntax (...), it converts the string into an array of its individual characters.

        //? Traditional way
        // const country = "INDIA";
        // console.log(country.split("")); // Output: [ 'I', 'N', 'D', 'I', 'A' ]

        //? New way of doing it
        // const country = "INDIA";
        // console.log([...country]); // Output: [ 'I', 'N', 'D', 'I', 'A' ]

//* ==========================================
//*  Rest parameters  - Modern JavaScript
//* =========================================
    //? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a more flexible way to work with functions that can accept varying numbers of arguments.

    //? traditional way of doing it
        // const sum = (a, b, c, d) => {
        //   return a + b + c + d;
        // };

        // console.log(sum(1, 2, 3, 4)); // Output: 10

    //? with rest parameters
        // const sum = (...numbers) => {
        // console.log(typeof numbers);
        //   return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
        // };

        // console.log(sum(1, 2, 3, 4, 5)); // Output: 15

    //TODO NOTE: A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
    // function wrong1(...one, ...wrong) {}
        // const sum1 = (...numbers, ...number2) => { // this is wrong
   
        // };

        
    // function wrong2(...wrong, arg2, arg3) {}

        // Correct Way 
        const sum = (a, b, ...numbers) => {
        // console.log(typeof numbers);
          return numbers.reduce((accum, curVal) => (accum = accum + curVal), a+b); // a+b = 3 is the starting value of accum
        };

        console.log(sum(1, 2, 3, 4, 5)); // Output: 15