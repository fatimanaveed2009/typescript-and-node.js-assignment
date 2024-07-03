//more conditional test
// Test for equality and in equality with string.
var string1 = "hello";
var string2 = "world";
console.log(string1 === string2);
console.log(string1 !== string2);
// Test using the lowercase function
var upperCase = "HELLO";
var lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase);
/*Numerical tests involving equality and inequality, greater than and less than, greater than and equal to,
 and less than and equal to.*/
var number1 = 10;
var number2 = 20;
console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 <= number2);
console.log(number1 >= number2);
// Test using "and"  and "or" condition
var x = 10;
var y = 20;
var z = 30;
console.log(x < y && y < z);
console.log(x > y || y < z);
// test whether an item is in array
var array1 = [1, 2, 3, 4, 5, 6];
var itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1);
// test whether an item  is not in a array.
console.log(array1.indexOf(10) === -1);
