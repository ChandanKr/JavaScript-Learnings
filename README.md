
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