//* ==========================================
//!    ECMAScript Features (2023) / ES14
//* =========================================

    //? List of new useful features added in ES14  👇
        // Array.findLast()
        // Array.findLastIndex()
        // Array.prototype.toReversed()
        // Array.prototype.toSorted(compareFn)
        // Array.prototype.toSpliced(start, deleteCount, ...items)
        // Array.prototype.with(index, value)

//* ===============================================
//*  Array.findLast() & Array.findLastIndex()
//* ==============================================
//? This function will allow us to find element from the last to first of the array based on a condition.
    const array = [1, 2, 3, 4, 5, 6, 4];
    console.log(array.findLast((elem) => elem)); // 4
    console.log(array.findLast((elem) => elem > 4)); // 6
    console.log(array.findLastIndex((elem) => elem)); // 6

//* ===============================================
//*  New Array.prototype functions
//* ==============================================

    const myNames = ["chandan", "kumar", "bokaro", "jharkhand"];

    //? Array.prototype.toReversed();
    // const reversedNum = myNames.toReversed();
    // console.log("original", myNames);
    // console.log("reversed", reversedNum);
    //todo if it's not working, run in browser console

    //? Array.prototype.toSorted(compareFn);
    // const sortedArr = myNames.toSorted();
    // console.log("original", myNames);
    // console.log("sorted", sortedArr);

    //? Array.prototype.toSpliced(start, deleteCount, ...items);
    // const splicedArr = myNames.toSpliced(1, 1, "ironMannn");
    // console.log("original", myNames);
    // console.log("spliced", splicedArr);

    //? Array.prototype.with(index, value);
    //* The with() method in JavaScript is used to change the value of an element at a specific index in an array. It takes two arguments: the index of the element to be changed and the new value. It returns a new array with the changed element, leaving the original array unchanged.

    // const replaceWith = myNames.with(2, "ironMannn");
    // console.log("original", myNames);
    // console.log("replaced", replaceWith);