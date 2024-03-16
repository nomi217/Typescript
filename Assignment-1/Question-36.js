"use strict";
/*

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
message printed on it. Call the function.

*/
// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.
let makeshirt = (size, message) => {
    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
};
makeshirt("Medium", "Sleep less, code more");
