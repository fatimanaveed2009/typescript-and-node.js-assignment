/*assignment#16:MORE GUEST:you just found a bigger dinner table so now more space is available. Think of 
three more guest, to invite to dinner

.start with your program from excersice 15. add a print statement to the end of your program informig 
people that you found a bigger dinner table

.add one neqw guest ti the middle of your array. use append()to add one new guest to the end of your list.
print a new set of invitation messages, one for each person in your list*/
 let guestlist:string[]=["abdullah","basit","kashif","imran"]
 console.log(`good new we found  a big dinner table we can invite naveed too`);

 guestlist.unshift("naveed");
console.log(guestlist);


