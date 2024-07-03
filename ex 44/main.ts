// sandwiches: Write a function that accepts an array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,and 
// it should print the summary of the sandwich that is being ordered.
//Call the function three times, using adifferent number of argument eech time.
function makeSandwich(items:any) {
    console.log('\nMaking your sandwich with:');
    items.forEach(function (element:any) { return console.log(" " + element); });
    console.log('Enjoy your sandwich!\n');
}
makeSandwich(['cabbage', 'mayonese', 'chicken']);
makeSandwich(['egg', 'mayonese', 'hot souce']);
makeSandwich(['peanut', 'butter']);
