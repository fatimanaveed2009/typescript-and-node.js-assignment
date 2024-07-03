// Alien color # 3 Turn your if-else chain from exercise 5-4 into an if-else chain.
// Write the three version of this program, making sureeach message is printed for the appropriate color alien.
// If the alien color is green, print the message that the player earned 5 points.
//If the alien color is yellow, print the message that the player earned 10 points.
// If the alien color is red,print the  message that the player earned  15 points.
// Version #1
var alienColor = "green";
if (alienColor === "green") {
    console.log("player earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("player earned 10 points");
}
else if (alienColor === "red ") {
    console.log("player earned 15 points");
}
else {
    console.log("please select the right color");
}
// Version #2
alienColor = "yellow";
if (alienColor === "green") {
    console.log("player earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("player earned 10 points");
}
else if (alienColor === "red ") {
    console.log("player earned 15 points");
}
else {
    console.log("please select the right color");
}
// Version # 3
alienColor = "red";
if (alienColor === "green") {
    console.log("player earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("player earned 10 points");
}
else if (alienColor === "red ") {
    console.log("player earned 15 points");
}
else {
    console.log("please select the right color");
}
