"use strict";
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

*/
// Array of magician's names
const magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];
function show__magicians(names) {
    console.log("List of Magicians:");
    names.forEach((names, index) => console.log(`${index + 1}. ${names}`));
}
// Call the function to show the magician's names
show__magicians(magicianNames);
