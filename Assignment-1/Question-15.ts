/* 
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/


let guest_List:Array<string> = ["Zia Khan","Nauman Khalid","Faisal"]

guest_List.forEach((guestName) =>
{
console.log(`Dear ${guestName}, you are invited to dinner please join us.`) 
})
let cancelGuest = guest_List.indexOf("Faisal")
console.log(`\n Sorry guys ${guest_List[cancelGuest]} is not comming for dinner `)
guest_List.splice(cancelGuest,1,"Usama")

console.log("\n Our new guests are :"
)

guest_List.forEach((guestName) =>
{
console.log(`Dear ${guestName}, you are invited to dinner please join us.`) 
})     