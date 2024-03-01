
# **Interview Questions:**


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
**Pointers**  | **forEach()** | **map()**
------------- | ------------- | -------------
**Purpose**  | used to iterate over an array and execute a function for each element of the array.  | used to iterate over an array and transform each element of the array using a provided callback function.
**Return Value**  | does not return a new array. it simply iterates over each element and executes the provided callback function. The return value of forEach is always **undefined**.  | returns a **new array** containing the results of applying the callback function to each element of the original array.
**Mutation**  | It does not mutate the original array. The callback function can modify the elements, but the original array remains unchanged.  | It does not mutate the original array. Instead, it creates and returns a new array with the transformed elements.

- **Examples**
    * forEach()
    ```
    let numbers = [1, 2, 3, 4, 5];

    numbers.forEach(function(element) {
        console.log(element); // Output each element
    });

    ```
    * map()
    ```
    let numbers = [1, 2, 3, 4, 5];

    let doubledNumbers = numbers.map(function(element) {
        return element * 2;
    });

    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
    ```

**Summary:** forEach is for iteration with side effects, while map is for transformation. Both have their own specific use cases depending on what you need to accomplish.