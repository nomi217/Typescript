/*
StpersonAges of Life: Write an if-else chain that determines a person’s stpersonAge of life. Set a value for the variable personAge, and then:
If the person is less than 2 years old, print a messpersonAge that the person is a baby.

• If the person is at least 2 years old but less than 4, print a messpersonAge that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a messpersonAge that the person is a kid.

• If the person is at least 13 years old but less than 20, print a messpersonAge that the person is a teenpersonAger.

• If the person is at least 20 years old but less than 65, print a messpersonAge that the person is an adult.

• If the person is personAge 65 or older, print a messpersonAge that the person is an elder.
*/

let personAge = 25;

// less than 2 years old, print a messpersonAge that the person is a baby.
if (personAge < 2) {
    console.log(`personAge is ${personAge}, The person is a baby.`);
} else if (personAge < 4) {
    console.log(`personAge is ${personAge}, The person is a toddler.`);
} else if (personAge < 13) {
    console.log(`personAge is ${personAge}, The person is a kid.`);
} else if (personAge < 20) {
    console.log(`personAge is ${personAge}, The person is a teenpersonAger.`);
} else if (personAge < 65) {
    console.log(`personAge is ${personAge}, The person is an adult.`);
} else {
    console.log(`personAge is ${personAge}, The person is an elder.`);
}

// to test wiht difrent personAge
console.log(`2nd test with difrint personAge`)
personAge = 12
if (personAge < 2) {
    console.log(`personAge is ${personAge}, The person is a baby.`);
} else if (personAge < 4) {
    console.log(`personAge is ${personAge}, The person is a toddler.`);
} else if (personAge < 13) {
    console.log(`personAge is ${personAge}, The person is a kid.`);
} else if (personAge < 20) {
    console.log(`personAge is ${personAge}, The person is a teenpersonAger.`);
} else if (personAge < 65) {
    console.log(`personAge is ${personAge}, The person is an adult.`);
} else {
    console.log(`personAge is ${personAge}, The person is an elder.`);
}