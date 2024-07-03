// Unchanged magician: Start with your ex 40.
// Call the function Make_great() with a copy of the array of megicians names,
// Because the origional array will be unchanged, return the new array and store it in a seperate array.
/* Call show_magician() with each array to show that you have one array to show that you 
 have one array of the origional name and one array with the Great added to each 
 magician name
.*/

let magician : string[]=['Harry Potter','Merlin','Albus dumbledore','Zatanna'];

function copyArray(arr:string[]){
    return[...arr]
}



function make_great(magicianArray:string[]){
    for (let i = 0; i < magicianArray.length; i++) {
      magicianArray[i] = 'The Great ' + magicianArray[i]
    
    }
}
 function show_magician(magicians:string[]){
  
    magicians.forEach(element => {
        console.log(element);  
    });
 }

const copyMagicianArray =copyArray(magician)
 make_great(copyMagicianArray);

console.log('\n\nThis is my origional array.');
show_magician(magician);

console.log('\n\nThis is my modified copy of the array.');
show_magician(copyMagicianArray);

