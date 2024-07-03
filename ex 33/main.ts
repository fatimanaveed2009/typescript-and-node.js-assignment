/*Ordinal number: Ordinal number indicate their position in array, such as 1st or 2nd.Most ordinal numbers
end in th except1,2 and 3.*/
// Store the numbers 1 through 9 in a array.
//Loop through the array.
/*Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should
read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on aseparate line*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    var ordinalEnding = void 0;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else if (num === 4) {
        ordinalEnding = "th";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(num, " ").concat(ordinalEnding));
}
