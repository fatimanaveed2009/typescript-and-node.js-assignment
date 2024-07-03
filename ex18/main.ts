//places to visit 
var placesToVisit = ['Turkey', 'Paris', 'Italy', 'America', 'China'];
//print in origional order
console.log("origional order:", placesToVisit);
//print your array in alphabetical order without modifying
console.log("alphabetical order:", placesToVisit.slice().sort());
// print to show that array is in its origional order
console.log("origional order:", placesToVisit);
//print your array in reverse alphabetical order without changing the order
console.log("reverse order:", placesToVisit.slice().sort().reverse());
//print to show that array is still in origional order
console.log("origional order:", placesToVisit);
//reverse the order of your list. print the array to show its order has change.
console.log(placesToVisit.reverse());
//reverse the order of your list again. Print the list to show its back to its origional order.
console.log("origional order:", placesToVisit.reverse());
//sort your array so its stored in  alphabetical order.Print the the array to shpw its order has been changed.
console.log(placesToVisit.sort());
//sort to change your array so its stored in reverse alphabeticalorder. print the list to show thats its order has been changed
console.log("reverse alphabatecal order change:", placesToVisit.sort().reverse());
console.log(placesToVisit);
