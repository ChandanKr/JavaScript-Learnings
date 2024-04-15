
<h1 align="center">Interview Questions:</h1>


#### **1.** What is difference between _null_ and _undefined_ ?
#### **Ans:** In JavaScript, null and undefined are both used to represent the absence of a meaningful value, but they have different meanings and behaviors:
- **_null_** is an explicit value that represents a variable or object that has no value or is empty. It's a way to "empty" a variable or reset it.
- **_undefined_** means that a variable has been declared but has not been assigned a value yet.

```
var iAmUseless = null
console.log(iAmUseless); //null, here iAmUseless is an object

var iAmOnStandBy;
console.log(iAmOnStandBy); // undefined
```

#### **2.** What is _NaN_ ?
#### **Ans:** NaN stands for "Not a Number." 
- It represents a value that is undefined or unrepresentable in numerical operations
- Typically arising from operations like division by zero, the square root of a negative number, or other undefined mathematical operations. 
- In programming languages such as Python or JavaScript, NaN serves as a special value to indicate that a mathematical operation or function cannot produce a meaningful result.

```
var practiceTime = "Chandan" - "Kumar";
console.log(practiceTime); // NaN 
console.log(isNaN(practiceTime)); // true

```

#### **3.**  WAP  to swap two numbers with and without using third variable.
#### **Ans:** 
- **With the use of third variable:**
```
var firstNumber = 5;
var secondNumber = 10;
console.log("Before swapping, First Number: ", firstNumber); // 5
console.log("Before swapping, Second Number: ", secondNumber); // 10

var tempNumber = secondNumber; // tempNumber = 10
secondNumber = firstNumber; // secondNumber = 5
firstNumber = tempNumber; // firstNumber = 10
console.log("After swapping, First Number: ", firstNumber); // 10
console.log("After swapping, Second Number: ", secondNumber); // 5

```

- **Without using third variable:**
```
variable.
var a = 5;
var b = 10;

a = a+b; // 5+10 => a = 15
b = a-b; // 15-10 => b = 5
a = a-b; // 15-5 => a = 10

console.log("After swapping, a: ", a); // After swapping, a:  10
console.log("After swapping, b: ", b); // After swapping, b:  5
```
#### **4.**  What is the difference between == and === ?
#### **Ans:** 
- Equality Operator (==) : Compares only the values.
```
var num1 = 5;
var num2 = "5";

console.log(num1 == num2); // true
```
- Strict Equality Operator (===) : Compares both value and type, making it safer and more predictable.
```
var num1 = 5;
var num2 = "5";

console.log(num1 === num2); // false
```
#### **5.**  Why we use "Functions" in JavaScript ?
#### **Ans:** We are using "Functions" beacuase of it's reusabilty. This means we have to define the code once and use it many times with different arguments for different results.

```
A "Function" is a group of reusable code which can be called anywhere in our program. This eliminates the need of writing the same code again and again.
```

#### **6.**  What is the difference function parameter and function argument ?
#### **Ans:** 
- **Function Parameter** : These are the placeholders for the actual values listed in the function's definition.
- **Function Argument** : These are the actual values that are passed to the function.
```
function greet(name) { // 'name' is a parameter.
    console.log("Hello, " + name + "!!");
}

greet("Chandan"); // "Chandan" is an argument passed to the function.

```
#### **7.**  What is the "Default Parameter" ?
#### **Ans:** **Default parameters** in JavaScript allow you to specify default values for function parameters if no value or undefined is passed when the function is called.
- Case 1 : When there is only one parameter
```
function greet(name = 'Anonymous') {
    console.log('Hello, ' + name + '!');
}

greet(); // Output: Hello, Anonymous!
greet('Chandan'); // Output: Hello, Chandan!

```
- Case 2 : When there is two or more than two parameters
```
function mult(a, b=5){
    console.log(a*b);
}

mult(9); // since only one argument provided, it'll consider a=9 (it always pick the first parameter) and b will be default value that is 5, Output: 9*5=45
mult(9, 8) // since both arguments provided, it'll ignore default value of 5, then Output: 9*8=72
```
#### **8.**  Write a function to reverse a given string without using built-in reverse method.
#### **Ans:** 
```
const isReversed = (originalString) => {
    var reversedString = "";
    for(let char = originalString.length-1; char >= 0; char--){
        reversedString = reversedString + originalString[char];
    }
    console.log(reversedString);
};

isReversed("chandan kumar"); // Output: ramuk nadnahc

```
#### **9.**  Write a function to determine if a given string is a palindrome or not.
#### **Ans:** 
```
const isPalindrome = (originalString) => {
    var reversedString = "";
    for(let char = originalString.length-1; char >= 0; char--){
        reversedString = reversedString + originalString[char];
    }
    console.log(originalString === reversedString ? `Yes, ${originalString} is a Palindrome String.` : `No, ${originalString} is not a Palindrome String.`);
};

isPalindrome("madam"); // Output: Yes, madam is a Palindrome String.
isPalindrome("chandan"); // Output: No, chandan is not a Palindrome String.

```
#### **10.**  What is difference between forEach() and map()?
#### **Ans:** 
- **forEach()**
  * **Purpose** : used to iterate over an array and execute a function for each element of the array.
  * **Return Value** : does not return a new array. it simply iterates over each element and executes the provided callback function. The return value of forEach is always **undefined**.
  *  **Mutation** : It does not mutate the original array. The callback function can modify the elements, but the original array remains unchanged.
  * **Example**
    ```
    let numbers = [1, 2, 3, 4, 5];

    numbers.forEach(function(element) {
        console.log(element); // Output each element
    });

    ```

- **map()**
  * **Purpose** : used to iterate over an array and transform each element of the array using a provided callback function.
  * **Return Value** : returns a **new array** containing the results of applying the callback function to each element of the original array.
  *  **Mutation** : It does not mutate the original array. Instead, it creates and returns a new array with the transformed elements.
  * **Example**
    ```
    let numbers = [1, 2, 3, 4, 5];

    let doubledNumbers = numbers.map(function(element) {
        return element * 2;
    });

    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
    ```

- **Summary:** forEach is for iteration with side effects, while map is for transformation. Both have their own specific use cases depending on what you need to accomplish.

#### **11.**  What will be the out put of following code?
```
let strValue = "This file is all about of JavaScript Interview Questions!!"
    a) console.log(strValue.slice(1));
    b) console.log(strValue.replace("all", "All"));
    c) console.log(strValue.substring(1));

```
#### **Ans:** Outputs are:
```
a) his file is all about of JavaScript Interview Questions!!
b) This file is All about of JavaScript Interview Questions!!
c) his file is all about of JavaScript Interview Questions!!
```
#### **12.**  Write a JavaScript function that prints the letter 'a' through 'z' in the console. 
[ **HINT:** You should use a loop to iterate through the letters and prnt each one in a new line. ]
#### **Ans:**
```
// console.log("a".charCodeAt(0)); // Output: 97
// console.log("z".charCodeAt(0)); // Output: 122

// console.log(String.fromCharCode(97)); // Output: a
// console.log(String.fromCharCode(122)); // Output: z

for(let i = 97; i <= 122; i++){
    console.log(String.fromCharCode(i));
}
```
#### **13.**  Write a JavaScript function to count the number of vowels in a string.
#### **Ans:** 
```
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
```
#### **14.**  Write a JavaScript function to check if all the vowels presents in a string or not?
#### **Ans:** 
```
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
```
#### **15.**  Write a JavaScript function isPangram to check given string is a Pangram or NOT? The function should be case-insensitive and ignore spaces.
**Pangram:** a string that contains all letters of the alphabet.

**Constraints:**

    - The input string will consist of alphabetic characters and spaces.
    - The function should handle both uppercase and lowercase letters.
    - Consider the English alphabet with 26 letters.
    - The function should handle special characters also.

#### **Ans:** 
```
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
```

#### **16.**  Write a function to add a specified number of days to a given date.
**Given Date:** "2024-03-29"
#### **Ans:** 
```
const addDaysToDate = (date, extraDay) => {
    let updatedDate = date.setDate(date.getDate() + extraDay);
    let updatedDateAfterAddingExtraDay = new Date(updatedDate);
        return updatedDateAfterAddingExtraDay;
};

const givenDate = new Date("2024-03-29");
console.log(givenDate.toLocaleDateString()); // Output: 29/3/2024

const newDate = addDaysToDate(givenDate, 7);
console.log(newDate.toLocaleDateString()); // Output: 5/4/2024
 ```

 #### **17.**  Write a function to calculate the difference in days between two given dates.
**Given Dates:** Date1 = "2024-02-19", Date2 = "2024-02-29"
#### **Ans:** 
```
const getDaysDifference = (date1, date2) => {
    let difference = Math.abs(date2 - date1);
    let oneDayInMS = 24 * 60 *60 * 1000;

    return Math.floor(difference / oneDayInMS);
};

const date1 = new Date("2024-02-19");
const date2 = new Date("2024-02-29");
console.log(getDaysDifference(date1, date2)); // Output: 10
 ```
#### **18.**  Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.
#### **Ans:** 

- **Pass by Value**
    - When a primitive data type (like numbers, strings, booleans, null, undefined, or symbols) is passed as an argument to a function or assigned to another variable, it's passed by value.
    - When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. 
    - Any changes made to the copy do not affect the original value.
    ```
    let num = 10;

    function increment(value) {
        return value + 1; // Incrementing the copied value
    }

    console.log(increment(num)); // Output: 11
    console.log(num); // Output: 10 (unchanged)
    ```

- **Pass by Reference**
    - An object (including arrays and functions) is passed as an argument to a function or assigned to another variable, it's passed by reference.
    - When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable.
    - Any changes made to the object through this reference will affect the original object.
    ```
    let obj = { id: 5, name: "Chandan" };

    let copyObj = obj;

    copyObj.name = "Chandan Kumar";

    console.log(copyObj); // Output: { id: 5, name: 'Chandan Kumar' }
    console.log("original", obj); // Output: original { id: 5, name: 'Chandan Kumar' }
    ```

#### **19.** Given an object representing a studentData, write a function to add a new subject with its corresponding grade to the studentData's record. Also check if the grades property is present or not? if not, add the property.
    ```
    studentData = {
        name: "Raj",
        age: 20,
        grades: {
        math: 90,
        science: 85,
        history: 88,
        },
    };
    ```
#### **Ans:** 
    ```
    let studentData = {
      name: "Raj",
      age: 20,
      grades: {
        math: 90,
        science: 85,
        history: 88,
      },
    };

    const addSubjectGrade = (studentData, subject, marks) => {
      if (!studentData.grades) {
        studentData.grades = {};
      }
      return (studentData.grades[subject] = marks);
    };

    addSubjectGrade(studentData, "computer", 92);
    console.log(studentData);
    ```

#### **20.** Write a function that compares two objects to determine if they have the same properties and values.
```
objA = { name: "Alice", age: 26, city: "New York" };
objB = { name: "Alice", age: 26, city: "New York" };
objC = { name: "Bob", age: 30, city: "San Francisco" };

areObjectsEqual(objA, objB) => return true
areObjectsEqual(objA, objC) => return false
```
#### **Ans:** 


    ```
    const areObjectsEqual = (obj1, obj2) => {
        let o1 = Object.keys(obj1);
        let o2 = Object.keys(obj2);

        if (o1.length != o2.length) {
            console.log("There keys are not same");
            return false;
        }

        for (let key in obj1) {
            if (obj1[key] !== obj2[key]) {
              return false;
            }
        }

        return true;
    };

    let objA = { name: "Alice", age: 26, city: "New York" };
    let objB = { name: "Alice", age: 26, city: "New York" };
    let objC = { name: "Bob", age: 30, city: "San Francisco" };

    console.log(areObjectsEqual(objA, objB)); // Output: true
    console.log(areObjectsEqual(objA, objC)); // Output: false
    ```
#### **21.** Write a function that transforms an array of an objects into an object where the keys are the objects' ids.
```
let inputArray = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

Should print: 
            { 
                '1': { id: 1, name: 'Alice' }, 
                '2': { id: 2, name: 'Bob' }, 
                '3': { id: 3, name: 'Charlie' } 
            }
```
#### **Ans:** 


    ```
    let inputArray = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
    ];

    const arrayToObj = (arr) => {
    let obj = {};
    for (let key of arr) {
        // console.log(key.id, key);
        obj[key.id] = key;
    }
    return obj;
    };

    console.log(arrayToObj(inputArray));
    ```

#### **21.** What is difference between Global Variable and Local Variable?
#### **Ans:** 
- **Global Variable:** A variable declared in the global scope is referred to as a global variable. It has global visibility and can be accessed from anywhere in the code.

- **Local Variable:** A variable declared within a function (function scope) or a block (block scope) is often referred to as a local variable. It has local visibility, limited to the function or block where it's declared.

    ```
    const globalVariable = "I'm a global variable";

    function myFunction() {
        // Function scope
        const functionVariable = "I'm a function variable";

        if (true) {
        // Block scope
        const blockVariable = "I'm a block variable";
        console.log(blockVariable); // Output: I'm a block variable
        console.log(functionVariable); // Output: I'm a function variable
        console.log(globalVariable); // Output: I'm a global variable
        }
        console.log(blockVariable); // Output: ReferenceError: blockVariable is not defined
    }

    myFunction();
    ```
#### **22.** Given a text with lots of extra spaces in between, Remove all those and make it a normalized text.
```
text = "This      has    extra     spaces   ."
```
#### **Ans:** 
```
const text = "This      has    extra     spaces   .";
const normalizedText = text.replaceAll(/\s+/g, " ")
console.log(text); // Output: This      has    extra     spaces   .
console.log(normalizedText); // Output: This has extra spaces.
```

#### **23.** Write a program to perform mathematical operations using callback functions and two variables in JavaScript.
* **Instructions:**
    * Define a higher-order function called mathOperation that takes three arguments: x, y, and operation.
    * Implement two callback functions:
    * add: Takes two numbers x and y and returns their sum.
    * sub: Takes two numbers x and y and returns the result of subtracting x from y.
    * Use the mathOperation function to perform addition and subtraction operations on two variables a and b.
    * Display the results of the operations.
#### **Ans:** 
```
const add = (x, y) => {
    return x + y;
};

const subtract = (x, y) => {
    return y - x;
};

const mathOperation = (num1, num2, operation) => {
    return operation(num1, num2);
};

console.log(mathOperation(10, 20, add)); // Output: 30
console.log(mathOperation(25, 40, subtract)); // Output: 15
```
