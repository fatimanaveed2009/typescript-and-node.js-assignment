/*assignment15:CHANGING GUEST LIST:you just heard that on eof your guest can`t make the dinner, so you
need to send out a new set of invitation you`ll have to think of somone else to invite

.start with your program from excersice14 add  a print statement at the end of your program stating
 the name of the guest who cant make it.

 .modify your list, replacing the name of the new person you are inviting

 .print a second set of invitation message one for each person who is still in your list*/
var guestLists = ["abdullah", "basit", "kashif", "imran"];
var cantAttend = guestLists.splice(1, 1)[0];
console.log("".concat(cantAttend, " can not make dinner"));
guestLists.push("junaid");
for (var i = 0; i < guestLists.length; i++) {
    console.log("".concat(guestLists[i], " are coming to dinner"));
}
