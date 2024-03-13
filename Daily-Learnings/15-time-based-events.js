//! Timing Based Events

//todo:- Topics to cover:
    //? 1. setTimeout()
    //? 2. setInterval()
    //? 3. clearTimeout()
    //? 4. clearInterval()


//* =============================================
// console.log("******* setTimeout() *******");
//* =============================================

    //? setTimeout() => The setTimeout() function is used to execute a function or code block after a specified delay in milliseconds.

        function delayedFunction(){
            console.log("Delayed by 2 seconds.");
        }

        // setTimeout(delayedFunction, 2000);
    
    // With arguments
        function delayedFunction1(num){
            console.log(`Delayed by ${num} seconds.`);
        }

        // setTimeout(() => delayedFunction1(4), 4000);

//* =============================================
// console.log("******* setInterval() *******");
//* =============================================

    //? setInterval() => The setInterval() function is used to repeatedly execute a function or code block at a specified interval in milliseconds.

        function repeatedFunction(){
            console.log("Repeated in every 5 second");
        }
        // setInterval(repeatedFunction, 5000);

//* ==============================================
// console.log("******* clearTimeout() *******");
//* ==============================================

    //? clearTimeout() => The global clearTimeout() method cancels a timeout previously established by calling setTimeout().

    function delayedFunction2(){
        console.log("Delayed by 2 seconds.");
    }

    const timeoutID = setTimeout(delayedFunction2, 2000);
    // clearTimeout(timeoutID);

//* ===============================================
// console.log("******* clearInterval() *******");
//* ===============================================

    //? clearInterval() => The global clearInterval() method cancels a timeout previously established by calling setInterval().

    function repeatedFunction2(){
        console.log("Repeated in every 2 second");
    }

    const intervalID = setInterval(repeatedFunction2, 2000);
    
    setTimeout(() => {
        clearInterval(intervalID);
        console.log("Interval cleared after 5 seconds...");
    }, 5000);
