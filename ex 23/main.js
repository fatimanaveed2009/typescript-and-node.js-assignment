"use strict";
// write a series  of conditional test(at least 10)
Object.defineProperty(exports, "__esModule", { value: true });
//test 1
var car = 'subaru';
console.log("Is car =='subaru'? I predict True.");
console.log(car == 'subaru');
//test 2
console.log("Is car =='toyota'? I predict False.");
console.log(car == 'toyota');
//test 3
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// test 4
console.log("Is car==='subaru'? I predict False");
console.log(car === 'subaru');
// test 5
console.log("Is car.length < 0? I predict True");
console.log(car.length < 0);
//test 6
console.log("Is car length < 5? I pridict True");
console.log(car.length < 5);
// test 7
console.log("Is car.toUpperCase() ==='SUBARU'? Ipredict True.");
console.log(car.toUpperCase() === 'subaru');
// test 8
console.log("Is car.toLowerCase()==='subaru'? I predict true.");
console.log(car.toLowerCase() === 'subaru');
// test 9
console.log("Is car.include('u')? I predict true.");
console.log(car.includes('u'));
// test 10
console.log("Is car.startsWith('s')? I predict true.");
console.log(car.startsWith('s'));
