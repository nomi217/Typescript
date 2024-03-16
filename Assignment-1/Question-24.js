"use strict";
let car1 = 'subaru';
// Tests for equality and inequality with strings
console.log("Is car equal to 'subaru'? I predict True.");
console.log(car1 === 'subaru');
console.log("Is car not equal to 'toyota'? I predict True.");
console.log(car1 !== 'toyota');
// Tests using the lower case function
console.log("Is car in lowercase equal to 'subaru'? I predict True.");
console.log(car1.toLowerCase() === 'subaru');
// Numerical tests
let x = 5;
let y = 10;
console.log("Is x less than y? I predict True.");
console.log(x < y);
console.log("Is x greater than or equal to y? I predict False.");
console.log(x >= y);
// Tests using "and" and "or" operators
let isSedan = true;
let isAutomatic = false;
console.log("Is car a sedan and automatic? I predict False.");
console.log(isSedan && isAutomatic);
console.log("Is car a sedan or automatic? I predict True.");
console.log(isSedan || isAutomatic);
// Test whether an item is in an array
let fruit = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruit.includes('apple'));
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruit.includes('grape'));
