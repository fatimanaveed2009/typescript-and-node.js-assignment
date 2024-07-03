/*assignment#12:GREETING:start with the array you used in excersice#11, but insted of just printing each
person`s name print a message to them The text of each message should be personatized with the persons name*/


let names:string[]=["muhid", "fatima", "ahmed"];
for (let i = 0; i < names.length; i++) {
    console.log(`hello my friends, ${names[i]} how are you today!`);
}