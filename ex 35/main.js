/*Animals: Think of at least three animals that have a common characterstics. Store the name of these
animals in a list,and than use a for loop to print out the name of each animal. */
// Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//Add a line at the end of your program stating what these animals have in common.
// You could print asentence such as Any of three animals would make a great pet! 
var animals = ['dog', ' cat', 'parrot'];
for (var i = 0; i < animals.length; i++) {
    var element = animals[i];
    console.log("A ".concat(animals[i], " would make a great pet."));
}
console.log("Any of three animals would make a great pet! ");
