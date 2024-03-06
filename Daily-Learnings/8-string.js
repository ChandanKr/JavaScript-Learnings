// String is a sequence of characters enclosed within either single quotes (') or double quotes ("). 
// Strings can contain any Unicode character, including letters, numbers, symbols, and whitespace.

//todo:- Topics To Cover:
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

//! substr() is deprecated ❌

//* slice() => extracts a part of a string and returns the extracted part in a new string

    // Syntax : stringName.slice(startIndex, endIndex);
        // startIndex => including
        // endIndex => excluding
    let strName = "Chandan Kumar";
    console.log(strName.slice(6)); // Output: n Kumar => it will start from index 6 and print all string till end
    console.log(strName.slice(0, 6)); // Output: Chanda => it will start from index 0 and print all string till index 5, will exclude index 6


//* substring() => Same as slice(), Extracts a portion of the string based on startIndex and endIndex
    //! camelCase(subString) is used to separate words, substring is not to be intended as Sub String but as a single word i.e. "substring"

    // Syntax : stringName.slice(startIndex, endIndex);
        // startIndex => including
        // endIndex => excluding
    console.log(strName.substring(9)); // Output: umar
    console.log(strName.substring(1, 6)); // Output: handa


//todo:- DIFFERENCE b/w slice() and substring()
    //! startIndex and endIndex values less than 0 are treated as 0 in substring()
    let newStr = "Hello everyone, My name is Chandan Kumar, from Jharkhand";
    console.log(newStr.slice(-8)); // Output: harkhand
    console.log(newStr.substring(-8)); // Output: Hello everyone, My name is Chandan Kumar, from Jharkhand

//------------------------------------------------------------------------------------------
console.log("******Extracting String Characters******");

//* charAt() => Retrieve a character from a specified index within a string. 
    //! If the index > string length, empty string is returned.
    //! If the index is negative value, empty string is returned.

    // Syntax: stringName.charAt(index)

    let txtString = "Welcome to the world of coding";
    console.log(txtString.charAt(11)); // Output: t
    console.log(txtString.charAt(4)); // Output: o
    console.log(txtString.charAt(19)); // Output: d
    console.log(txtString.charAt(190)); // Output:   => returning empty string, as index > string length
    console.log(txtString.charAt(-4)); // Output:   => returning empty string, as index > as index is negative value

//* charCodeAt() => Returns the Unicode value of the character at a specified index within a string. 
    //! If the index > string length, NaN is returned.
    //! If the index is negative value, NaN is returned.

    // Syntax: stringName.charCodeAt(index)
    
    console.log(txtString.charCodeAt(11)); // Output: 116
    console.log(txtString.charCodeAt(4)); // Output: 111
    console.log(txtString.charCodeAt(19)); // Output: 100
    console.log(txtString.charCodeAt(190)); // Output: NaN  => returning NaN, as index > string length
    console.log(txtString.charCodeAt(-4)); // Output: NaN => returning NaN, as index is negative value


//? ES2022 (ES13) introduced a new string method - at()
//* at() => Retrieve the character at a specified index in a string.
    //! If the index > string length, undefined is returned.
    //! If index is negative, it counts from the end of the string, starting from -1.

    // Syntax: stringName.at(index)

    console.log(txtString.at(11)); // Output: t
    console.log(txtString.at(4)); // Output: o
    console.log(txtString.at(19)); // Output: d
    console.log(txtString.at(190)); // Output: undefined  => returning undefined, as index > string length
    console.log(txtString.at(-4)); // Output: d => returning d, as index -4 is d (count from last)

//todo:- DIFFERENCE b/w charAt() and at()

    // charAt() dosn't allow negative index, returns an empty string if provided negative index value
    // at() allows negative index, it counts from the end of the string starting from -1 and return the character of the string

    let diffStr = "Baba da Dhaba";
    console.log(diffStr.charAt(-3)); // Output:   => returning an empty string
    console.log(diffStr.at(-3)); // Output: a

//------------------------------------------------------------------------------------------
console.log("******Replace String Content******");

//* replace() => Returns a new string with the replacements made, without modifying the original string.

    
    //! If none of the characters match the searchValue in the string, it will not make any replacements, and return the original string without any changes

    // Syntax: stringName.replace("value", "valueToBeChange");

    let strValue = "Best university in the world!!"
    console.log(strValue.replace("u", "U")); // Output: Best University in the world!!
    console.log(strValue.replace("Best", "Worst")); // Output: Worst university in the world!!
    console.log(strValue.replace("xxx", "aaa")); // Output: Best university in the world!!

//------------------------------------------------------------------------------------------
console.log("******Other Useful Methods******");

//* toUpperCase() => Converts all string value to UPPERCASE
//* toLowerCase() => Converts all string value to lowercase

    let generalString = "Bank of India";
    console.log(generalString.toUpperCase()); // Output: BANK OF INDIA
    console.log(generalString.toLowerCase()); // Output: bank of india

    //todo:- You want to capitalize the first letter of a string using JavaScript. How do you do this?

    let nameStr = "chandan kumar";
    let modStr = nameStr[0].toUpperCase() + nameStr.slice(1); 
    console.log(modStr); // Output: Chandan kumar

    //! OR
    let modStr1 = nameStr.charAt(0).toUpperCase() + nameStr.slice(1); 
    console.log(modStr1); // Output: Chandan kumar


//* trim() => Remove whitespace characters from both ends of a string. 
        // Whitespace characters include spaces, tabs, and newline characters. 
        // It doesn't modify the original string.
        // instead, it returns a new string with the leading and trailing whitespace removed.

        const normalStr = '   Hello, world!   ';
        const trimmedStr = normalStr.trim();
        console.log(normalStr, normalStr.length); // Output:    Hello, world!    19
        console.log(trimmedStr, trimmedStr.length); // Output: Hello, world! 13

//* split() => Split a string into an array of substrings based on a specified separator. 
    // The original string remains unchanged.
    // Return value: An array containing the substrings split from the original string.

    const fruitStr = 'apple,banana,orange';

    // Splitting the string using a comma as the separator
    const result = fruitStr.split(',');
    console.log(result); // Output: ['apple', 'banana', 'orange']
    console.log(result[1]); // Output: banana

    // Splitting the string using a comma as the separator with a limit of 2
    const result1 = fruitStr.split(',', 2);
    console.log(result1); // Output: ['apple', 'banana']
