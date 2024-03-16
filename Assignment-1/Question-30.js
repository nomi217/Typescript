"use strict";
/* Hello Admin: Make an array of five or more userNames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
let username = ['Nauman', 'Zia', 'Faisal', "Admin", "Usama"];
for (const name of username) {
    if (name === 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${name} thank you for login in again`);
    }
}
