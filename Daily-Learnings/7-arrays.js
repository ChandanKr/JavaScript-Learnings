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
// 2. Insert, Add, Replace and Delete Array Elements
// 3. Searching and Filter in an Array
// 4. Sort and Compare an Array
// 5. Array Methods - Map(), Reduce(), Filter()

// CRUD
    // Create (Add/Insert elements) => push(), unshift(), or directly assigning values to specific indices.
    // Read (Access elements) =>  using square bracket notation, forEach(), map(), filter(), etc.
    // Update (Modify elements) =>  by directly assigning new values to specific indices, splice().
    // Delete (Remove elements) => pop(), shift(), splice(), or by setting the value to undefined.

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
console.log(person[0]); // To print the first element of the array, Output: Chandan
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
// It calls a function for each element in the array.
// It will not break the operation in between.
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
// It creates a new array by calling a function for every array element.
// It doesn't change the original array.

    // map() with normal function
    myFriends.map(function(element, index, array){
        console.log(element + " index : " + index + " in [" + array + "]");
    });

    // map() with Arrow function
    myFriends.map((element, index, array) => {
        console.log(element + " is at " + index + " index in [" + array + "]");
    });

//------------------------------------------------------------------------------
console.log("***Insert, Add, Replace and Delete Array Elements***");

// 1. push(): Method that adds one or more elements to the end of an array.
// 2. pop(): Method that removes the last element from an array.
// 3. unshift(): Method that adds one or more elements to the beginning of an array.
// 4. shift(): Method that removes the first element from an array.
// 5. splice(): Method that adds or removes elements in anywhere.

let personsArray = ['Ram', 'Hari'];
personsArray.push('Gita');
console.log(personsArray); // Output: [ 'Ram', 'Hari', 'Gita' ]

personsArray.push('Rita', 'Shree');
console.log(personsArray); // Output: [ 'Ram', 'Hari', 'Gita', 'Rita', 'Shree' ]

personsArray.pop();
console.log(personsArray); // Output: [ 'Ram', 'Hari', 'Gita', 'Rita' ]

personsArray.unshift('Shree');
console.log(personsArray); // Output: [ 'Shree', 'Ram', 'Hari', 'Gita', 'Rita' ]

personsArray.unshift('Parul', 'Ajay');
console.log(personsArray); // Output: [  'Parul', 'Ajay', 'Shree', 'Ram', 'Hari', 'Gita', 'Rita' ]

personsArray.shift();
console.log(personsArray); // Output: [ 'Ajay', 'Shree', 'Ram', 'Hari', 'Gita', 'Rita' ]


// 5. splice(): Method that adds or removes elements in anywhere.

// Syntax: arrayName.splice(startIndex, deleteCount, item1, item2, ...);

// ADDITION: If you have three or more parameters, REMOVE First and then ADD.
// REMOVAL: If you have only two parameters.

let colorsArray = ['Red', 'Green', 'Blue', 'Yellow', 'White'];

// Remove 1 element starting from index 2
colorsArray.splice(2, 1); // Output: [ 'Red', 'Green', 'Yellow', 'White' ]
console.log(colorsArray);

// Remove 2 elements starting from index 1, and insert 'Black', 'Black'
colorsArray.splice(1, 2, 'Purple', 'Black');
console.log(colorsArray); // Output: [ 'Red', 'Purple', 'Black', 'White' ]

// Remove all elements starting from index 2
colorsArray.splice(2);
console.log(colorsArray); // Output: [ 'Red', 'Purple' ]

// Add elements without removing any
colorsArray.splice(2, 0, 'White', 'Orange', 'Blue');
console.log(colorsArray); // Output: [ 'Red', 'Purple', 'White', 'Orange', 'Blue' ]

// Negative indices also work, in the splice and slice method only, negative indexes work from backward starting from -1
colorsArray.splice(-2, 1);
console.log(colorsArray); // Output: [ 'Red', 'Purple', 'White', 'Blue' ]

// Add element the end without removing any
colorsArray.splice(colorsArray.length, 0, 'Maroon');
console.log(colorsArray); // Output: [ 'Red', 'Purple', 'White', 'Blue', 'Maroon' ]

//------------------------------------------------------------------------------
console.log("***Searching in an Array***");
// Searching and filtering are common operations performed on arrays to retrieve specific elements that meet certain criteria. 

// SEARCHING IN AN ARRAY
// For Search We have --> indexOf, lastIndexOf & includes

// 1. indexOf() Method
// It returns the first (least) index at which a given element can be found in the array, or -1 if none is found. 
// It will search the element from the 0th index number if you do not provide the index number from where it will start searching.

// Syntax: arrayName.indexOf(SearchElement, fromIndex)

var boysArray = ['Chandan', 'Ram', 'Rahul', 'Ajay', 'Arun', 'Ram', 'Rahul'];
console.log(boysArray.indexOf('Ram')); // Output: 1
console.log(boysArray.indexOf('Rahul', 3)); // Output: 6
console.log(boysArray.indexOf('Arjun')); // Output: -1


// 2. lastIndexOf() Method
// It is used to search for a specified element from the end of an array and returns the index position of the last occurrence of that element. 
// If the element is not found, it returns -1.

// arrayName.lastIndexOf(searchElement, tillIndex)


console.log(boysArray.lastIndexOf('Ram')); // Output: 5
console.log(boysArray.lastIndexOf('Rahul', 4)); // Output: 2 => First it will go to index 3 and search till that element only

// 3. includes() Method
// It checks whether an array an array includes a certain element or not.
// It returns boolean value -  true or false.

// Syntax: includes(searchElement, fromIndex);

console.log(boysArray.includes('Ram'));
console.log(boysArray.includes('Rahul', 2));

console.log(boysArray.includes('Arjun'));
console.log(boysArray.includes('Arjun', 2));

//------------------------------------------------------------------------------
console.log("***Filters in an Array***");

// Filter method is used to create a new array with all elements that pass a test implemented by the provided function.

// 1. find() method: The find() method is used to find the first element in an arraythat satisfies a provided testing function. It returs the first matching element on undefined if no element is found.

const numbers = [1, 9, 2, 3, 6, 4, 5, 6, 7, 1, 8, 9, 10];

// Find the first even number
const firstEvenNumber = numbers.find(number => number % 2 === 0);
console.log(firstEvenNumber); // Output: 2

// Find the number that is greater than 5
let numberGreaterThanFive = numbers.find(number => number > 5);
console.log(numberGreaterThanFive); // Output: 9


// 2. findIndex() method: The findIndex() method of TypedArray instances returns the index of first element in a typed array that satisfies a provided testing function. If no elements satisfy the testing function, -1 is returned.

// Find the index of first even number
const indexOfFirstEvenNumber = numbers.findIndex(number => number % 2 === 0);
console.log(indexOfFirstEvenNumber); // Output: 2

// Find the index of number that is greater than 5
let indexOfNumberGreaterThanFive = numbers.findIndex(number => number > 5);
console.log(indexOfNumberGreaterThanFive); // Output: 1


// 3. filter() method: The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Find the array of all even numbers
const filteredEvenNumber = numbers.filter(number => number % 2 === 0);
console.log(filteredEvenNumber); // Output: [ 2, 6, 4, 6, 8, 10 ]

// Find the array of all numbers that is greater than 5
let filteredNumberGreaterThanFive = numbers.filter(number => number > 5);
console.log(filteredNumberGreaterThanFive); // Output: [ 9, 6,  6, 7, 8, 9, 10 ]


//------------------------------------------------------------------------------
console.log("***Sort and Compare an Array***");

// By default, the sort() method sorts the elements of an array in ascending order, converting the elements into strings and comparing their sequences of UTF-16 code units values.

    // SORT an Array
    const numbersToSort = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    console.log(numbersToSort.sort());

    let colorsToSort = ['Red', 'Green', 'Blue', 'Yellow', 'White'];
    console.log(colorsToSort.sort());

    // COMPARE and SORT
    // Sort in ascending order
    // SYNTAX:
        // if(a > b) return -1  => means keep the order
        // if(b > a) return 1  => means switch the order

        numbersToSort.sort((a, b) => {
            if (a > b) return 1;
            if (b > a) return -1;
        });
        console.log(numbersToSort);
        
        colorsToSort.sort((a, b) => {
            if (a > b) return 1;
            if (b > a) return -1;
        });
        console.log(colorsToSort);

    // Sort in descending order
    // SYNTAX:
        // if(a > b) return 1  => means switch the order
        // if(b > a) return -1  => means keep the order

    numbersToSort.sort((a, b) => {
        if (a > b) return -1;
        if (b > a) return 1;
    });
    console.log(numbersToSort);
    
    colorsToSort.sort((a, b) => {
        if (a > b) return -1;
        if (b > a) return 1;
    });
    console.log(colorsToSort);

//------------------------------------------------------------------------------
console.log("***Reduce method in an Array***");

// The reduce() method in JavaScript is used to reduce the elements of an array to a single value. It executes a provided function once for each element in the array, resulting in a single output value. 

// Syntax:
    // arrayName.reduce(function callback(accumulator, currentValue, index, array) {
    //     // logic
    //     // return the updated accumulator value
    // }, initialValue);

    const val = [1, 2, 3, 4, 5];

    const sum = val.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0); // 0 is the initial value of accumulator
    
    console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
    