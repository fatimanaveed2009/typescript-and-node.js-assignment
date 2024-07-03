/* City name: Write  a function called city_country() that takes in the name of a city and its country. 
the function should return a string formatted like this:
    "lohare,pakistan"
call your function with atleast three countries-cities pair and print the value that returns*/

function city_country(city:string,country:string){
    return `${city},${country}`;   
}

console.log(city_country('Karachi','Pakistan'));
console.log(city_country('Tokyo','Japan'));
console.log(city_country('Paris','France'));