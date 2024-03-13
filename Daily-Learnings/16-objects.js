//! JavaScript Objects

    // * Objects are a fundamental part of JS, providing a way to group related data and functions together.

    //* An Object is a collection of key-value pairs, where each key is a string (or a symbol), and each value can be of any data type, including other objects.

    //* Objects can have properties and methods, making them versatile for various use cases.

    //* SYNTAX:
        //? objName = {}

    //todo:- Topics to cover:

        //* Creating Objects
        //* Accessing Object Properties
        //* Adding and Modifying Properties
        //* Object Methods
        //* Dynamic keys in an object
        //* Data Modeling
        //* Pass by value
        //* Pass by reference
        //* Comparison by Reference
        //* JSON (JavaScript Object Notation)
        //* "this" Object
        //* Objects Useful Methods
            // 1: Object.keys()
            // 2: Object.values()
            // 3: Object.entries()
            // 4: Object.hasOwnProperty()
            // 5: Object.assign()
            // 6: Object.freeze()
        //* Interview Question - Objects
        //* Interview Question - Object Manipulation
        //* Interview Question - Object Comparison
        //* Interview Question - Object Transformation

//* ==============================
//* Creating Objects:
//* ==============================
    //? There are several ways to create objects in JavaScript. The most common one is using object literals:

        const product = {
            id: 1,
            pName: "Laptop"
        };
        console.log(product);

        let person = {
            name: "Chandan", // String
            age: 26, // number
            isStudent: false, // boolean value
            greet: function(){ // method
                return "Hello Everyone, this is object method.";
            }
        };
        console.log(person);
  
//* ==============================
//* Accessing Object Properties:
//* ==============================
    //? You can access object properties using dot notation or square bracket notation:

        console.log(person.name);
        console.log(person.age);
        console.log(person.isStudent);
        
        console.log(person["name"]);
        console.log(person["age"]);
        console.log(person["isStudent"]);

//* =================================
//* Adding and Modifying Properties:
//* =================================
    //? You can add new properties or modify existing ones:
        person.job = "Developer";
        person.age = 27;
        console.log(person);

//* =================================
//* Object Methods:
//* =================================
    //? Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:

        console.log(person.greet());

//* ========================================
//* We can add dynamic keys in an object
//* ========================================
    //? useCase: when we want to get the user name and value in react

        let idType = "UID";

        let student = {
            [idType]: "16BCS2866", // Dynamic key based on idType
            studentName: "Chandan Kumar",
            studentAge: 26,
            isStudent: true,
            collegeName: "Chandigarh University",
            greet: function() {
                return `Hey, My name is ${student.studentName}. I'm ${student.studentAge} years old. I'm from ${student.collegeName}. My ${idType} is ${student[idType]}.` ;
            }
        };
        console.log(student.greet());

//* =================================
//* Data Modeling:
//* =================================
    //? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

    // Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.

        let car = {
            brand: "TATA",
            model: "Harrier",
            color: "Black",
            year: 2012,
            start: function() {
                console.log("Engine Started!");
            }
        };

//* =====================================
//*  Pass by Value
//* ======================================
 
    //? When a primitive data type (like numbers, strings, booleans, null, undefined, or symbols) is passed as an argument to a function or assigned to another variable, it's passed by value.

    //? When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. 
    
    //! Any changes made to the copy do not affect the original value.

        let num = 10;

        function increment(value) {
            return value + 1; // Incrementing the copied value
        }

        console.log(increment(num)); // Output: 11
        console.log(num); // Output: 10 (unchanged)


//* =====================================
//*  Pass by Reference
//* ======================================

    //? An object (including arrays and functions) is passed as an argument to a function or assigned to another variable, it's passed by reference.

    //? When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. 
    
    //! Any changes made to the object through this reference will affect the original object.

        let obj = { id: 5, name: "ironMan" };

        let copyObj = obj;

        copyObj.name = "Chandan Kumar";
        console.log(copyObj); // Output: { id: 5, name: 'Chandan Kumar' }
        console.log("original", obj); // Output: original { id: 5, name: 'Chandan Kumar' }

    //* To avoid this behavior and create a true copy of the object, you can use methods like Object.assign() or the spread operator (...):

    //? Object.assign() is used to copy properties from one or more source objects to a target object.

        let obj2 = { id: 5, name: "ironMan" };
        let copyObj2 = {};
        let newObj = Object.assign(copyObj2, obj2);

        newObj.name = "Chandan Kumar";

        console.log(newObj); // Output: { id: 5, name: 'Chandan Kumar' }
        console.log("original", obj2); // Output: original { id: 5, name: 'ironMan' }

//* =====================================
//* Comparison by Reference:
//* ======================================
    //? Two objects are equal only if they refer to the same object.
    //? Independent objects (even if they look alike) are not equal:

        const nameObj = { name: "chandan" };
        const nameObj2 = { name: "chandan" };
        const nameObj3 = nameObj;

        const isEqual = nameObj == nameObj2 ? true : false;
        console.log(isEqual); // Output: false

        const isEqualOrNot = nameObj == nameObj3 ? true : false;
        console.log(isEqualOrNot); // Output: true

//* =====================================
//* JSON (JavaScript Object Notation):
//* ======================================
    //?JSON is a data interchange format derived from JavaScript objects. Objects can be easily converted to JSON and vice versa.

        let studentDetails = {
          id: 1,
          sName: "Chandan",
          sAge: 26,
          isStudent: false,
          greet: function () {
            console.log(
              `Hey my id is ${studentDetails.identity} & my name is ${studentDetails.sName}`
            );
          },
        };

        let jsonData = JSON.stringify(studentDetails);
        console.log(jsonData); // Output: {"id":1,"sName":"Chandan","sAge":26,"isStudent":false}

        let parsedObject = JSON.parse(jsonData);
        console.log(parsedObject); // Output: { id: 1, sName: 'Chandan', sAge: 26, isStudent: false }

//* =====================================
//* "this" Object
//* ======================================
    //? In JavaScript, the this keyword refers to an object.

    // Which object depends on how this is being invoked (used or called).

    //* The "this" keyword refers to different objects depending on how it is used:

        //* In an object method, this refers to the object.
        //* Alone, this refers to the global object.
        //* In a function, this refers to the global object.
        //* In a function, in strict mode, this is undefined.
        //* In an event, this refers to the element that received the event.
        //* Methods like call(), apply(), and bind() can refer this to any object.

    //! Note: "this" is not a variable. It is a keyword. You cannot change the value of this.

        // function callMe() {
        //   console.log(this);
        // }

        // callMe(); // try to run on browser console

    //todo  Let's check the this keyword values in an object methods

        //* Regular Function Expression:
            const objSample = {
              name: "IronMan",
              greet: function () {
                console.log(this);
              },
            };

            objSample.greet(); // try to run on browser console

            //* In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.
            const objSample2 = {
              name: "IronMan",
              greet() {
                console.log(this);
              },
            };

            objSample2.greet(); // try to run on browser console

        //* Fat Arrow Function
            const objSample3 = {
              name: "Chandan Kumar",
              greet: () => {
                console.log(this);
              },
            };

            objSample3.greet(); // try to run on browser console

//* =====================================
//* Objects Useful Methods
//* ======================================
    const productSample = {
      id: 1,
      name: "Laptop",
      category: "Computers",
      brand: "ExampleBrand",
      price: 999.99,
      stock: 50,
      description:
        "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
      image: "image link will be added during projects",
    };

    //* 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.

        let keys = Object.keys(productSample);
        console.log(keys);

    //* 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.
        let values = Object.values(productSample);
        console.log(values);

    //* 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.
        let entries = Object.entries(productSample);
        console.log(entries);

    //* 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.
        console.log(productSample.hasOwnProperty("name")); // Output: true
        console.log(productSample.hasOwnProperty("isStudent")); // Output: false

    //* 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
        const source = { a: 1, b: 5 };
        const target = { b: 3, c: 4 };
        const mergedObject = Object.assign(source, target);
        console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

    //* 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
        Object.freeze(productSample);
        productSample.id = "5656";
        console.log(productSample);

//* =====================================
//* Interview Question - Objects
//* ======================================
    //! 1: What will be the output?

        const sourceSample = { a: 1, b: 2 };
        const targetSample = { b: 3, c: 4 };

        const mergedObjectSample = Object.assign({}, sourceSample, targetSample);
        console.log(mergedObjectSample); // Output: { a: 1, b: 3, c: 4 }

//* ===============================================
//* Interview Question - Object Manipulation:
//* ================================================
    //! Problem: Given an object representing a studentData, write a function to add a new subject with its corresponding grade to the studentData's record. Also check if the grades property is present or not?
        let studentData = {
        name: "Bob",
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

//* ===============================================
//* Interview Question - Object Comparison:
//* ================================================
    //! Problem: Write a function that compares two objects to determine if they have the same properties and values.
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

        // Example usage:
        let objA = { name: "Alice", age: 26, city: "New York" };
        let objB = { name: "Alice", age: 26, city: "New York" };
        let objC = { name: "Bob", age: 30, city: "San Francisco" };

        console.log(areObjectsEqual(objA, objB)); // Output: true
        console.log(areObjectsEqual(objA, objC)); // Output: false

//* ===============================================
//* Interview Question - Object Transformation:
//* ================================================
    //! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.
    // Should print: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }

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