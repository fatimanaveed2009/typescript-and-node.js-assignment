// Magician: Make an array of magicians names.
//Pass the array to a function called show_magician(), which prints the name of each magician in the array.

let magician : string[]=['Harry Potter','Merlin','Albus dumbledore','Zatanna'];

 function show_magician(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);  
    });
 }

 show_magician(magician);

