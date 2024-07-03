// assignment 17
// Shrinking guest list
var guestList = ['Fatima', 'Amer', 'Sameer', 'danish', 'javid'];
console.log("Unfotunately! new dinner table will not arrive so we can ivite any two. ");
//removing guest from list (pop)method;
while (guestList.length > 2) {
    var guestRemoval = guestList.pop();
    console.log("Sorry ".concat(guestRemoval, ", you are not invited to dinner"));
}
// print a message for remaining guest that they are invited
guestList.forEach(function (guest) {
    console.log("dear ".concat(guest, ", you are still invited for dinner."));
});
// remove all guest make an empty list(splice method)
guestList.splice(0, guestList.length);
//print updated empty list
console.log("updated empty list:", guestList);
