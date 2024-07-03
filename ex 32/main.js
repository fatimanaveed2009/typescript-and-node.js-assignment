/* Checking usernames: do the following to create a program to simulates how website ensure that everyone has
a unique username*/
// Make a list of five or more usernames called current_users.
/* Make a list of five usernames called new_usernames. Make sure one or two of the new usernames are also
in the current_users list.*/
/* loop throgh yhe new_users list to see if each new user name has already been used. If it has, print a
message that the person will need to enter a new username. If a username has not been used, print amessage
saying that the username is available.*/
// Make sure your comparision is case insensitive. If "john" has been used, "jhon" shoild not be accepted.
var current_users = ['Taha', 'Mukarram', 'Khurram', 'Hamza', 'Nazim'];
var new_users = ['Naveed', 'Taha', 'Bilal', 'Yasir', 'Hamza'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUsers = new_users_1[_i];
    var lowercase_new_users = newUsers.toLowerCase();
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_users))
        console.log("the username ".concat(newUsers, " is not available please write a different name"));
    console.log("the username ".concat(newUsers, " is available"));
}
