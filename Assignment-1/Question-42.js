"use strict";
/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/
// Array of magician's names
const magician_Names = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];
function make__great(magician) {
    magician.forEach((names, index, array) => {
        array[index] = `The great ${names}`;
    });
}
function show_magicians(names) {
    console.log("List of Magicians:");
    names.forEach((names, index) => console.log(`${index + 1}. ${names}`));
}
make__great(magician_Names);
show_magicians(magician_Names);
