"use strict";
/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized with
 the person’s name. */
const personNames = ['Nauman Khalid', 'Faisal Mehboob'];
for (let name of personNames) {
    // print a personalize message for each friend
    console.log(`Good morning ${name}, I hope you are having a fantastic day!`);
}
