// Great magician: Start with a copy of your program from exercise 39.
// Write a functioncalled make_great() that modifies the array of magicians by adding the phrase The Great toeach magicians name.
//Call show magician() to see that the list has actually been modified.
var magician = ['Harry Potter', 'Merlin', 'Albus dumbledore', 'Zatanna'];
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magician[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);
