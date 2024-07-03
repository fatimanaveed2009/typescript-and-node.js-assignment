//ex 19
let guestList:string[]=['Fatima','Amber','anam','Samreen','Urooj','Saba'];
console.log(`Unfotunately! new dinner table will not arrive so we can ivite any two. `);

//removing guest from list (pop)method;

while (guestList.length >2) {
   let removeGuest:string|undefined=  guestList.pop();
   console.log(`Sorry ${removeGuest}, you are not invited to dinner`);
    
}

// print a message for remaining guest that they are invited
guestList.forEach(guest => {
    console.log(`dear ${guest}, you are still invited for dinner.`)
    
});

// dinner guest. working with your ex 14 till 18 print a message indicating the number of people you are inviting to dinner

console.log(`two guest are still invited`);



