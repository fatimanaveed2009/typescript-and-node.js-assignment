"use strict";
// No users: Add an if test to exercise 28 to make sure the list of users is not empty.
// If yhe list is empty, print the message; We need to find some users.
// Remove all the usernames from your array, and make sure the correct message is printed.
let userNames = ['Admin', 'Hamza', 'Nazim', 'Mukarram', 'Khurram'];
if (userNames.length === 0) {
    console.log('We need to find some users.');
}
else {
    userNames = [];
    console.log('All usernames have been removed. ' + userNames.length);
}
