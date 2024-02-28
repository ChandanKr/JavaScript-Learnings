// values and variable in javascript

var firstName = 'Chandan'; // var => Variable(key), firstName => name of the variable, 'Chandan' => value 
var lastName = 'Kumar';
var myAge = 26;

console.log(firstName);
console.log(lastName);
console.log("My Name is " + firstName + " " + lastName + ".");
console.log("My age is " + myAge + " years old.");

var _myName = "chandan";
console.log(_myName); // valid variable name

var _1my__Name = "kumar";
console.log(_1my__Name); // valid variable name

// var 1myName = "chandan kumar";
// console.log(1myName); // invalid variable name (number not allowed at first position)

var $myName = "kumar chandan";
console.log($myName); // valid variable name

// var myName% = "kumar chandan";
// console.log(myName%); // invalid variable name (no special characters allowed)