//! Date and Time Objects

//* The Date() constructor creates Date objects.
//* When called as a function, it returns a string representing the current time.

//? Syntax:
    //* new Date() => mostly used syntax
    //* new Date(dateString)

//todo:- 9 ways to create a new Date Objects
    //* 1. new Date()
    //* 2. new Date(dateString)
    //* 3. new Date(year, month)
    //* 4. new Date(year, month, day)
    //* 5. new Date(year, month, day, hours)
    //* 6. new Date(year, month, day, hours, minutes)
    //* 7. new Date(year, month, day, hours, minutes, seconds)
    //* 8. new Date(year, month, day, hours, minutes, seconds, ms)
    //* 9. new Date(milliseconds)

//?=============================================
console.log("******* 1. new Date() *******");
//?=============================================
//* new Date() => Creates a Date object representing the current date and time.

    const curDate = new Date();
    console.log(curDate); // Output: 2024-03-12T17:43:10.749Z

    //todo:-  This is the ISO 8601 format, which is a standard for representing dates and times. In this format, the date and time are represented together, separated by the letter "T". The "Z" at the end indicates that the time is in UTC (Coordinated Universal Time).

    //? But the same when you run on browser it will return more human-readable format.
        const currentDate2 = new Date();
        console.log(currentDate2); // Output on browser: Tue Mar 12 2024 23:17:35 GMT+0530 (India Standard Time)

//?=====================================================
console.log("******* 2. new Date(dateString) *******");
//?=====================================================
//* new Date(dateString) => Creates a Date object based on the provided date string.

    const dateString = "2024-03-12T17:43:10.749Z";
    console.log(new Date(dateString)); 
    // Output: 2024-03-12T17:43:10.749Z
    // Browser Output: Tue Mar 12 2024 23:13:10 GMT+0530 (India Standard Time)

//?======================================================
console.log("******* 3. new Date(year, month) *******");
//?======================================================
//* new Date(year, month) => Creates a Date object based on the provided year and month.

    const date = new Date(2024,1);
    console.log(date); 
    // Output: 2024-01-31T18:30:00.000Z
    // Browser Output: Thu Feb 01 2024 00:00:00 GMT+0530 (India Standard Time)

//?===========================================================
console.log("******* 4. new Date(year, month, day) *******");
//?===========================================================
//* new Date(year, month, day) => Creates a Date object based on the provided year, month and day.

    const date1 = new Date(2024, 1, 19);
    console.log(date1); 
    // Output: 2024-02-18T18:30:00.000Z => in JS, months and date are stored in an array with index 0
    // Browser Output: Mon Feb 19 2024 00:00:00 GMT+0530 (India Standard Time)

//?==================================================================
console.log("******* 5. new Date(year, month, day, hours) *******");
//?==================================================================
//* new Date(year, month, day, hours) => Creates a Date object based on the provided year, month, day and hours.

    const date3 = new Date(2024, 1, 19, 10);
    console.log(date3); 
    // Output: 2024-02-19T04:30:00.000Z
    // Browser Output: Mon Feb 19 2024 10:00:00 GMT+0530 (India Standard Time)

//?===========================================================================
console.log("******* 6. new Date(year, month, day, hours, minutes) *******");
//?===========================================================================
//* new Date(year, month, day, hours, minutes) => Creates a Date object based on the provided year, month, day, hours and minutes.

    const date4 = new Date(2024, 1, 19, 10, 40);
    console.log(date4); 
    // Output: 2024-02-19T05:10:00.000Z
    // Browser Output: Mon Feb 19 2024 10:40:00 GMT+0530 (India Standard Time)

//?====================================================================================
console.log("******* 7. new Date(year, month, day, hours, minutes, seconds) *******");
//?====================================================================================
//* new Date(year, month, day, hours, minutes, seconds) => Creates a Date object based on the provided year, month, day, hours, minutes and seconds.

    const date5 = new Date(2024, 1, 19, 10, 40, 34);
    console.log(date5); 
    // Output: 2024-02-19T05:10:34.000Z
    // Browser Output: Mon Feb 19 2024 10:40:34 GMT+0530 (India Standard Time)

//?========================================================================================
console.log("******* 8. new Date(year, month, day, hours, minutes, seconds, ms) *******");
//?========================================================================================
//* new Date(year, month, day, hours, minutes, seconds, ms) => Creates a Date object based on the provided year, month, day, hours, minutes, seconds and milliseconds.

    const date6 = new Date(2024, 1, 19, 10, 40, 34, 874);
    console.log(date6); 
    // Output: 2024-02-19T05:10:34.874Z
    // Browser Output: Mon Feb 19 2024 10:40:34 GMT+0530 (India Standard Time) => ms won't visible on output

//?=======================================================
console.log("******* 9. new Date(milliseconds) *******");
//?=======================================================
//* new Date(milliseconds) => Creates a Date object representing the number of milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).

    const date7 = new Date(874);
    console.log(date7); 
    // Output: 1970-01-01T00:00:00.874Z
    // Browser Output: Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

    //? Get current milliseconds and current time with this current milliseconds
    const currentMilliseconds = new Date().getTime();
    console.log(currentMilliseconds); // Output: 1710267927706 => it will increase every time.

    const currentTimeFromMCurrentMilliseconds = new Date(currentMilliseconds);
    console.log(currentTimeFromMCurrentMilliseconds);
    // Output: 2024-03-12T18:25:27.706Z => it will increase every time.
    // Browser Output: Tue Mar 12 2024 23:55:27 GMT+0530 (India Standard Time) => it will increase every time.


//?========================================================================
console.log("******* Get Date Methods - Getting Date Components *******");
//?========================================================================

    const currentDate = new Date(); // In a date object, the date and time is static.
    console.log(currentDate); // Output: 2024-03-12T18:44:41.379Z

    const Year = currentDate.getFullYear();
    console.log(Year); // Output: 2024

    const Month = currentDate.getMonth(); // 0 based index
    console.log(Month); // Output: 2

    const datee = currentDate.getDate();
    console.log(datee); // Output: 13

    const day = currentDate.getDay(); // 0 based index starting from sunday
    console.log(day); // Output: 3 => Wednesday

//?========================================================================
console.log("******* Set Date Methods - Setting Date Components *******");
//?========================================================================

    const currentDateAndTime = new Date();
    console.log(currentDateAndTime); // Output: 2024-03-12T18:54:12.888Z

    currentDateAndTime.setFullYear(2025);
    console.log(currentDateAndTime); // Output: 2025-03-12T18:55:05.827Z

    currentDateAndTime.setMonth(5); // => 0 based index
    console.log(currentDateAndTime); // Output: 2025-06-12T18:56:26.629Z

    currentDateAndTime.setDate(25); // => 0 based index
    console.log(currentDateAndTime); // Output: 2025-06-24T18:58:03.872Z

//?========================================================================
console.log("******* Get Time Methods - Getting Time Components *******");
//?========================================================================

    const currentTime = new Date(); // In a date object, the date and time is static.
    console.log(currentDate); // Output: 2024-03-12T19:00:19.409Z

    const hours = currentTime.getHours();
    console.log(hours); // Output: 0 => for 00:33:48
    
    const minutes = currentTime.getMinutes();
    console.log(minutes); // Output: 33 => for 00:33:48

    const seconds = currentTime.getSeconds();
    console.log(seconds); // Output: 48 => for 00:33:48

    const time = currentTime.getTime();
    console.log(time); // Output: 1710270246373

//?========================================================================
console.log("******* Set Time Methods - Setting Time Components *******");
//?========================================================================

    const currentDateAndTime1 = new Date();
    console.log(currentDateAndTime1); // Output: 2024-03-12T19:07:05.261Z

    currentDateAndTime1.setHours(10);
    console.log(currentDateAndTime1); // See browser output for best readable format

    currentDateAndTime1.setMinutes(45);
    console.log(currentDateAndTime1); // See browser output for best readable format

    currentDateAndTime1.setSeconds(55);
    console.log(currentDateAndTime1); // See browser output for best readable format

    currentDateAndTime1.setMilliseconds(500);
    console.log(currentDateAndTime1); // won't See browser output

    currentDateAndTime1.setTime(1710270246373);
    console.log(currentDateAndTime1);


//?========================================================================
console.log("******* Useful Methods of Date String *******");
//?========================================================================

    //* 1: toLocaleString() => Returns a string representing the date and time portion of a Date object using the current locale's conventions.
    const dates = new Date();
    const localeString = dates.toLocaleString();
    console.log(localeString); // Output: 13/3/2024, 1:59:34 am

    //* 2: toLocaleDateString() => Returns a string representing the date portion of a Date object using the current locale's conventions.
    const times = new Date();
    const localeDateString = times.toLocaleDateString();
    console.log(localeDateString); // Output: 13/3/2024

    //* 3: toLocaleTimeString() => Returns a string representing the date portion of a Date object using the current locale's conventions.
    const timess = new Date();
    const localeTimeString = timess.toLocaleTimeString();
    console.log(localeTimeString); // Output: 2:03:53 am

    //* parse() => Parses a string representation of a date and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
    const dateStringg = "2024-03-12T20:33:53.064Z";
    const parsedDate = Date.parse(dateStringg);
    console.log(parsedDate); // Output: 1710275633064
    


