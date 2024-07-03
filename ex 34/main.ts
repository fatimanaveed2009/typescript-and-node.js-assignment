/* Pizzas: Think of at least thre kinds of your favorite pizzas. Store these pizzas name in array,and then
 use a for loop to print the name of each pizzas*/
/*Modify your for loop to print a sentence using the name of pizza instead of printing just the name of
 pizza. For each pizza you should have one line of output containing a simple statement as
  I like pepperoni pizza*/
/*Add a line at the end of your program,outside the loop, that states how much you like pizza. The output
should consist of three or more lines about the kinds of pizza you like and then an additional sentence
such as I really love pizza! */
let pizzas = ['pepperoni', 'fajita', 'BBQ chicken'];
for (let _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    let pizza = pizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
