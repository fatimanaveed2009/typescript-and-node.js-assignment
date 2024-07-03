// Magician: Make an array of magicians names.
//Pass the array to a function called show_magician(), which prints the name of each magician in the array.
var magician = ['Harry Potter', 'Merlin', 'Albus dumbledore', 'Zatanna'];
function show_magician(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
show_magician(magician);
