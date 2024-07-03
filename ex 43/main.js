// Unchanged magician: Start with your ex 40.
// Call the function Make_great() with a copy of the array of megicians names,
// Because the origional array will be unchanged, return the new array and store it in a seperate array.
/* Call show_magician() with each array to show that you have one array to show that you
 have one array of the origional name and one array with the Great added to each
 magician name
.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ['Harry Potter', 'Merlin', 'Albus dumbledore', 'Zatanna'];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('\n\nThis is my origional array.');
show_magician(magician);
console.log('\n\nThis is my modified copy of the array.');
show_magician(copyMagicianArray);
