/* 
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/

let fruits: { name: string, color: string, taste: string, unit: string };

// Assign values to the 'fruit' object properties.
fruits = {
    name: "Orange",
    color: "Orange",
    taste: "Tangy",
    unit: "Dozen"
};

// Output a message describing the fruit using template literals to include object properties.

console.log(`My favorite fruit is ${fruits.name}. It is ${fruits.color} in color, has a ${fruits.taste.toLowerCase()} taste, and is sold in units of ${fruits.unit.toLowerCase()}.`);