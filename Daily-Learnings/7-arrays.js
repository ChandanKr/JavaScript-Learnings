// An array is a data structure used to store multiple values in a single variable. 
// These values can be of any data type, including numbers, strings, objects, or even other arrays. 
// Arrays are indexed collections, meaning each element is associated with a numerical index starting from 0.

// let fruits = new Array; // This line is optional in JavaScript.
// let fruits = ["apple", "banana", "orange", "grapes"];
// index =>         0        1           2       3

// fruits[0]  =>  apple
// fruits[1]  =>  banana
// fruits[2]  =>  orange
// fruits[3]  =>  grapes
//------------------------------------------------------------------------------
// 1. Array Traversal
// 2. Searching and Filter in an Array
// 3. Sort and Compare an Array
// 4. Insert, Add, Replace and Delete Array Elements (CRUD - Create, Read, Update, Delete)
// 5. Array Methods - Map(), Reduce(), Filter()

//------------------------------------------------------------------------------
console.log("***Array Creation***");

// Using Array Constructor
let fruits = new Array("apple", "banana", "orange", "grapes");
console.log(fruits); // Output: [ 'apple', 'banana', 'orange', 'grapes' ]

// Using Array Literals
// Most commonly used way ro create an array
let fruits1 = [ 'apple', 'banana', 'orange', 'grapes' ]
console.log(fruits1); // Output: [ 'apple', 'banana', 'orange', 'grapes' ]

//------------------------------------------------------------------------------
console.log("***Accessing Array Elements***");

let person = ['Chandan', 'Rahul', 'Sneha'];
console.log(person[1]);  // Output: Rahul
console.log(person[0]); // To print first element of the array, Output: Chandan
console.log(person[person.length - 1]); // To print last element of the array, Output: Sneha

//------------------------------------------------------------------------------
console.log("***Modify Array Elements***");

let newperson = ['Chandan', 'Rahul', 'Sneha'];
console.log("Original Array: ", newperson);  // Output: [ 'Chandan', 'Rahul', 'Sneha' ]
newperson[1] = "Ajay";
console.log("Modified Array: ", newperson);  // Output: [ 'Chandan', 'Ajay', 'Sneha' ]

//------------------------------------------------------------------------------
console.log("***Array Traversal***");
// The process of visiting each element in an array and performing a specific operation on each element. 
// Traversal is a common task when working with arrays, as it allows you to inspect, manipulate, or process each element individually. 

let myFriends = ['Chandan', 'Rahul', 'Sneha', 'Gopi'];
console.log(myFriends.length); // length property to check the length of an array

// Traversing using for loop
    for(let i = 0; i < myFriends.length; i++){
        console.log(`Number ${i + 1} friend of mine is ${myFriends[i]}.`);
    }

// Traversing using For...in Loop
    for(let items in myFriends){ // items will return array index number here.
        console.log(items);
        console.log(`${myFriends[items]} is in my Friend List.`);
    }

// Traversing using For...of Loop
    for(let items of myFriends){ // items will return array element here.
        console.log(`Friend: ${items}.`);
    }

// Traversing using ForEach Loop
// it calls a function for each element in the array.
// it will not break the operation in between.
// It will change the original array.

    // ForEach with normal function
    myFriends.forEach(function(element, index, array){
        console.log(element + " index : " + index + " in [" + array + "]");
    });

    // ForEach with Arrow function
    myFriends.forEach((element, index, array) => {
        console.log(element + " is at " + index + " index in [" + array + "]");
    });

// Traversing using map()
// It creates a new array from calling a function for every array element.
// It doesn't not change the original array.

    // map() with normal function
    myFriends.map(function(element, index, array){
        console.log(element + " index : " + index + " in [" + array + "]");
    });

    // map() with Arrow function
    myFriends.map((element, index, array) => {
        console.log(element + " is at " + index + " index in [" + array + "]");
    });


//------------------------------------------------------------------------------
console.log("***Searching and Filter in an Array***");
// Searching and filtering are common operations performed on arrays to retrieve specific elements that meet certain criteria. 

// SEARCHING IN AN ARRAY
// For Search we have - indexOf, lastIndexOf & includes

// 1. Array.prototype.indexOf()
// It returns the first (least) index at which a given element can be found in the array, or -1 if none is found. 
// It will search the element from the 0th index number.
// Syntax: indexOf(SearchElement, fromIndex)

var boys = ['Chandan', 'Ram', 'Rahul', 'Ajay', 'Arun', 'Ram'];
console.log(boys.indexOf('Ram'));
