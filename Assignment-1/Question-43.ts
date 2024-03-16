/* 
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

// Array of magician's names
const magician__Names = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];


function showMagicians(magicians:string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians:string[]) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}


// Modify the array to add "the Great" to each magician's name
const great_MagicianNames = make_great(magician__Names);

// Call the function to show the original magician's names
console.log("Original Magicians:");
showMagicians(magician__Names);

// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
showMagicians(great_MagicianNames);