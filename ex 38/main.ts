/* Cities: Write a function called describe_city() that accepts the name of a city and its country.
the function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
country a default value. Call your function for three differentcities, at least one of this is not in 
default country*/

function describe_city(city:string,country:string =' Pakistan'){
    console.log(`${city} is in ${country}.`);
}

describe_city('Karachi');
describe_city('Lahore');
describe_city('Tokyo','Japan');