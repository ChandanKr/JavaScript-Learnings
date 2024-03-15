
//!    ES7 ECMAScript2016 :

    //todo: Topics to Cover:

        //* Exponentiation Operator
        //* Array.includes()

//* ==============================
//*  Exponentiation Operator
//* ===============================

    //? ES7 introduces a new mathematical operator called exponentiation operator. This operator is similar to using Math.pow() method. Exponentiation operator is represented by a double asterisk **. The operator can be used only with numeric values.

    //* Syntax: base_value ** exponent_value;

    //? Basic usage:
    let base = 2;
    let exponent = 3;
    console.log("using Math.pow(): ", Math.pow(base, exponent)); // Output: using Math.pow(): 8
    console.log("using exponentiation operator: ", base ** exponent); // Output: using exponentiation operator: 8

    //? In expressions:
    //! calculates the area of a circle with a radius of 5 units.
    let area = Math.PI * (5 ** 2);
    console.log(area.toFixed(2)); // Output: 78.54

//* ==============================
//*  Array.includes()
//* ===============================
    //? It checks whether an array includes a certain element or not.
    //? It returns boolean value -  true or false.

    //* Syntax: includes(searchElement, fromIndex);

    var boysArray = ['Chandan', 'Ram', 'Rahul', 'Ajay', 'Arun', 'Ram', 'Rahul'];

    console.log(boysArray.includes('Ram')); // Output: true
    console.log(boysArray.includes('Rahul', 2)); // Output: true

    console.log(boysArray.includes('Arjun')); // Output: false
    console.log(boysArray.includes('Arjun', 2)); // Output: false