/*
Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
    • Modify your program to print a statement about each animal, such as A dog would make a great pet.
    • Add a line at the end of your program stating what these animals have in common. You could print a 
    sentence such as Any of these animals would make a great pet!
*/

// List of animals with a common characteristic

let animals:Array<string> = ['Goat','Cow','Camel']

console.log("Animals:");
for (let i=0;i<animals.length;i++){
    console.log(animals[i])
}
console.log("\nStatements about Animals:");
for (let i=0;i<animals.length;i++){
    if(animals[i]=="Goat"){
        console.log(`Goats are animals that like to climb and eat many different kinds of plants.`)
    }
   else if(animals[i]=="Cow"){
        console.log(`Cows are big animals that give us milk and are often found on farms.`)
    }
   else if(animals[i]=="Camel"){
        console.log(`Camels are animals with a hump on their back that can go a long time without drinking water and are seen in deserts.`)
    }
}

console.log("\nWhat these animals have in common:");
console.log("These are all animals that people keep, and they are mammals");