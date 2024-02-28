// console.log(5+20); // 25
// Here, 5 and 20 are operands, + is operator.
// Operands + Operators => Expressions

// 6 Operators in JavaScript
    // 1. Assignment Operators
    // 2. Arithmetic Operators
    // 3. Comparison Operators
    // 4. Logical Operators
    // 5. String Operators/String Concatanation Operators
    // 6. Conditional (Ternary) Operators
//---------------------------------------------------------------------------------------------------------------

console.log("**********Assignment Operators**********");
// An Assignment Operator are symbols used in programming to assign a value to a variable
// ()=) is the basic assignment operator. It assigns the value on the right-hand side to the variable on the left-hand side.
var x = 20;
var y = 20;
console.log(x , y); // 20 20
console.log("Is both x and y are equal? "+ x==y); // false
console.log("Is both x and y are equal? ", x==y); // Is both x and y are equal?  true
//---------------------------------------------------------------------------------------------------------------

console.log("**********Arithmetic Operators**********");
// Arithmetic operators are symbols used in programming to perform mathematical operations on operands, such as addition(+), subtraction(-), multiplication(*), division(/), and modulus(%) [remainder of division].
// Increment and Decrement Operator is a part Arithmetic Operators
console.log(2+2); // 4
console.log(5-2); // 3
console.log(3*5); // 15
console.log(15/5); // 3
console.log(53%9); // 8

console.log("**********Increment and Decrement Operators**********");
// Increment and Decrement Operator
// Operator: x++ or ++x or x-- or --y

// If used postfix, with operator after operand (for example, x++) => the increment operator increments and returns the value before incremnting;
var numberX = 15;
var newNumberX = numberX++; // it will assign 15 to newNumberX first, then increment numberX from 15 to 16
console.log(numberX); // 16
console.log(newNumberX); //15

var numberY = 15;
var newNumberY = numberY--; // it will assign 15 to newNumberX first, then decrement numberX from 15 to 14
console.log(numberY); // 14
console.log(newNumberY); // 15

// If used prefix, with operator before operand (for example, ++x) => the increment operator increments and returns the value after incremnting;
var numberA = 15;
var newNumberA = ++numberA; // it will increment numberX from 15 to 16 first, then assign this 16 to newNumberX
console.log(numberA); // 16
console.log(newNumberA); //16

var numberB = 15;
var newNumberB = --numberB; // it will decrement numberX from 15 to 14 first, then assign this 14 to newNumberX
console.log(numberB); // 14
console.log(newNumberB); // 14
//---------------------------------------------------------------------------------------------------------------

console.log("**********Comparison Operators**********");

//Comparison operators are symbols used in programming to compare two values. They return a Boolean value (true or false) depending on whether the comparison is true or false. Common comparison operators include:
    // Equal to (==): Compares if two values are equal.
    // Not equal to (!=): Compares if two values are not equal.
    // Greater than (>): Compares if one value is greater than another.
    // Less than (<): Compares if one value is less than another.
    // Greater than or equal to (>=): Compares if one value is greater than or equal to another.
    // Less than or equal to (<=): Compares if one value is less than or equal to another.

var num1 = 20;
var num2 = 10;
console.log(num1 == num2); // false
console.log(num1 != num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false
//---------------------------------------------------------------------------------------------------------------

console.log("**********Logical Operators**********");
//Logical operators are symbols used in programming to perform logical operations on Boolean values (true or false). 
//They are used to combine multiple conditions or expressions and determine the overall truth value.
//Common logical operators include:

    // AND (&&): Returns true if both operands are true.
    // OR (||): Returns true if at least one of the operands is true.
    // NOT (!): Reverses the logical state of its operand. If the operand is true, the result is false, and vice versa.

var a = 20;
var b = 10;
console.log(a>b && b>a); // false
console.log(a>b || b>a); // true
console.log(a<b || b>a); // false
console.log(!(a>b)); // false
console.log(!true); // false
//---------------------------------------------------------------------------------------------------------------

console.log("**********String Operators/String Concatanation Operators**********");
// The Concatanation Operator (+) Concatanates two or more than two string values together.
// It returns another string that is the union of these operand strings.
var firstName = "Chandan";
var lastName = "Kumar";
var fullName = firstName + " " + lastName; // Concatenation using the "+" operator
console.log(fullName); // Chandan Kumar

//---------------------------------------------------------------------------------------------------------------

console.log("**********Conditional (Ternary) Operators**********");
// The conditional operator, often referred to as the ternary operator, provides a concise way to express conditional statements. 
// Its syntax is:
    // condition ? expression1 : expression2
        // condition is evaluated first.
        // If condition is true, expression1 is executed.
        // If condition is false, expression2 is executed.
    // The result of the entire expression is the value of the executed expression (expression1 or expression2).

var myAge = 26;
var myStatus = (myAge >= 18) ? "You are an Adult" : "You are a Minor";
console.log(myStatus); // You are an Adult