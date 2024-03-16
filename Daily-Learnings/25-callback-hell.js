//* ================================
//!  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

const getStudentData = () => {
    setTimeout(() => {
      console.log("Hi, My name is Chandan");
      setTimeout(() => {
        console.log("Hi, I don't have middleName");
        setTimeout(() => {
          console.log("Hi, My lastName is Kumar");
          setTimeout(() => {
            console.log("Hi, I like to code ");
            setTimeout(() => {
              console.log("Hi, I live in Jharkhand");
              setTimeout(() => {
                console.log("Hi, I was born in Bokaro");
                setTimeout(() => {
                  console.log("Hi, I love to play Cricket");
                  setTimeout(() => {
                    console.log("Hi,I am a quick learner");
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  };
  
  getStudentData();