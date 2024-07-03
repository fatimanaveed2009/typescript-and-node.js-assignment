// stages of life: Write an if-else chain that determines a persons stages of life.
// Set a value for the variableage and then:

let age: number = 30

// if the person is less than 2 years old, print a message that the person is a baby.

// if the person is at least 2 years old but less than 4 years, print a message that the person is a toddler.

// if  the person is at least 4 years old but less than 13 years, print a message that the person is a kid.

// if  the person is at least 13 years old but less than 20 years, print a message that the person is a teenager.

// if  the person is at least 20 years old but less  than 65 years, print a message that the person is a adult.

//if the person is 65 or older, print a message that the person is an elder.
age = 30
if (age < 2) {
    console.log(" the person is a baby.");   
}
else if (age >= 2 && age < 4) {
    console.log(" the person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log(" the person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log(" the person is a adult.");
}
else{
    console.log(" the person is an elder.");
    
}