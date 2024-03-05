// String is a sequence of characters enclosed within either single quotes (') or double quotes ("). 
// Strings can contain any Unicode character, including letters, numbers, symbols, and whitespace.

// Topics To Cover:
    // String Properties
    // Escape Character
    // String Search Method
    // Extracting String Parts
    // Extracting String Characters
    // Replace String Content
    // Other Useful Methods

//------------------------------------------------------------------------------------------
console.log("******String Properties******");

// length => Returns the length of the string including spaces and special characters.
    let name = "Chandan Kumar, Jharkhand";
    console.log(`Length of ${name} : `, name.length); // Output: Length of Chandan Kumar, Jharkhand :  24

//------------------------------------------------------------------------------------------
console.log("******Escape Character******");

// In JavaScript, the backslash \ is used as an escape character.
// it allows us to include special characters in a string.

    //       Code   |    Result   |    Description
    //    ----------|-------------|--------------------------------
    //       \'     |    '        |    For getting single quote
    //       \"     |    "        |    For getting double quote
    //       \\     |    \        |    For getting a backslash

    console.log("My Name is \'Chandan\'"); // Output: My Name is 'Chandan'
    console.log("My Name is \"Chandan\""); // Output: My Name is "Chandan"
    console.log("I am Chandan\\Rahul"); // Output: I am Chandan\Rahul

//------------------------------------------------------------------------------------------
console.log("******String Search Method******");

// indexOf() =>  This method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found.
// it is case sensitive.

    let str = "Hello, World!";
    console.log(str.indexOf("World")); // Output: 7
    console.log(str.indexOf("world")); // Output: -1
    
// lastIndexOf() => This method returns the index of the last occurrence of a specified text in a string, or -1 if not found.
    
    let text = "Please locate where 'locate' occurs!";
    console.log(text.lastIndexOf("locate")); // Output: 21

// search() => searches a string for a string (or a regular expression) and returns the position of the match,  or -1 if not found.

    let longtxt = "The rain in Spain falls mainly in the plain.";
    console.log(longtxt.search("Spain")); // Output: 12
    
// match() => Returns an array of matched values or null if no match found.
    console.log(longtxt.match("Rain")); // Output: null

    console.log(longtxt.match("ain")); // Output: [  'ain',  index: 5,  input: 'The rain in Spain falls mainly in the plain.',  groups: undefined ]
    // Pls Note: Here, the js converts the normal text into regular expression longtxt.match(/rain/); without the g flag.

    console.log(longtxt.match(/ain/)); // Output: [  'ain',  index: 5,  input: 'The rain in Spain falls mainly in the plain.',  groups: undefined ]

    console.log(longtxt.match(/ain/g)); // Output: [ 'ain', 'ain', 'ain', 'ain' ]

// matchAll() => returns an iterator containing the results of matching a string against a string (or a regular expression).

    console.log(longtxt.matchAll("rain")); // Output: Object [RegExp String Iterator] {}
    // Pls Note: Here, the js converts the normal text into regular expression longtxt.matchAll(/rain/g); with the g flag.
    console.log(longtxt.matchAll(/rain/g)); // Output: Object [RegExp String Iterator] {}

    let resArray = longtxt.matchAll("ain");
    for(let item of resArray){
        console.log(item[0] + " at index " + item.index);
    }

// includes() => It checks whether a string includes a specified value or not, returns boolean value -  true or false.

    let includeTxt = "The rain in Spain falls mainly in the plain.";
    console.log(includeTxt.includes("rain")); // Output: true
    console.log(includeTxt.includes("Rain")); // Output: false => due to case sensitive
    console.log(includeTxt.includes("water")); // Output: false
    console.log(includeTxt.includes("Spa")); // Output: true
    
// startsWith() => Return true if a string begins with a specified value. Otherwise it returns false.
    console.log(includeTxt.startsWith("rain")); // Output: false
    console.log(includeTxt.startsWith("The")); // Output: true
    console.log(includeTxt.startsWith("Th")); // Output: true
    
    console.log(includeTxt.startsWith("rain", 4)); // Output: true, if we specify a starting value

// endsWith() => Return true if a string ends with a specified value. Otherwise it returns false.
    console.log(includeTxt.endsWith("rain")); // Output: false
    console.log(includeTxt.endsWith("plain.")); // Output: true
   

//------------------------------------------------------------------------------------------
console.log("******Extracting String Parts******");

