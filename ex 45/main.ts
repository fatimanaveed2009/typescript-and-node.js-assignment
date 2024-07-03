// Cars: Write a function that store information about a car in an object.
// The function should always receive amanufacturer and model name.
// It should then accepts an arbitrary number of keyword arguments.
//Call the function with the required information and two other name-value pairs, color or an optional feature.
//Print the objects that is returned to make sure that all the information was stored correctly.

function storeCarInfo(manufecturer:string,modelName: string, ...extraOption:{[key:string] :any} [] ){

    const carInfo ={
        manufecturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return carInfo;
};

 
 let answare = storeCarInfo('Honda','Civic',{color:'black'},{features: ['Naigation','Power window']})
 console.log(answare);
 