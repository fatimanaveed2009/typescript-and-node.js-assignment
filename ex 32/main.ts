/* Checking usernames: do the following to create a program to simulates how website ensure that everyone has 
a unique username*/
// Make a list of five or more usernames called current_users.

/* Make a list of five usernames called new_usernames. Make sure one or two of the new usernames are also 
in the current_users list.*/

/* loop throgh yhe new_users list to see if each new user name has already been used. If it has, print a
message that the person will need to enter a new username. If a username has not been used, print amessage
saying that the username is available.*/

// Make sure your comparision is case insensitive. If "john" has been used, "jhon" shoild not be accepted.

let current_users: string[] = ['Taha','Mukarram','Khurram','Hamza','Nazim'];

let new_users: string[] =['Naveed','Taha','Bilal','Yasir','Hamza'];

for (let newUsers of new_users){
    const lowercase_new_users =newUsers.toLowerCase();

    if(current_users.map(user => user.toLowerCase()).includes(lowercase_new_users))

    console.log(`the username ${newUsers} is not available please write a different name`);

    console.log(`the username ${newUsers} is available`);
    
    
}