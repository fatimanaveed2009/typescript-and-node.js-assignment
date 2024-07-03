//more conditional test
// Test for equality and in equality with string.

const string1:string="hello"
const string2:string="world"

console.log(string1 === string2);
console.log(string1 !== string2);


// Test using the lowercase function

const upperCase: string = "HELLO";
const lowerCase: string = "hello";

console.log(upperCase.toLowerCase() === lowerCase);

/*Numerical tests involving equality and inequality, greater than and less than, greater than and equal to,
 and less than and equal to.*/

 const number1: number = 10;
 const number2: number = 20;

 console.log(number1 === number2);
 console.log(number1 !== number2);
 console.log(number1 > number2);
 console.log(number1 < number2);
 console.log(number1 <= number2);
 console.log(number1 >= number2);

 // Test using "and"  and "or" condition

 const x: number = 10;
 const y: number = 20;
 const z: number = 30;

 console.log(x < y && y < z);
 console.log(x > y || y < z);

 // test whether an item is in array

 const array1: number[]=[1,2,3,4,5,6];
 const itemToFind: number = 3;

 console.log(array1.indexOf(itemToFind) !== -1);

 // test whether an item  is not in a array.

 console.log(array1.indexOf(10)=== -1);

 
 
 
 
 