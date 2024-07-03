// Great magician: Start with a copy of your program from exercise 39.
// Write a functioncalled make_great() that modifies the array of magicians by adding the phrase The Great toeach magicians name.
//Call show magician() to see that the list has actually been modified
let magician = ['Harry Potter', 'Merlin', 'Albus dumbledore', 'Zatanna'];
function make_great(magicianArray:any) {
    for (var i = 0; i < magicianArray.length; i++) {
        magician[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magician(magicians:any) {
    magicians.forEach(function (element:any) {
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);
