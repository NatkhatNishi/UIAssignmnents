// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

let fruitArray = [{ id: 1, name: 'Apple', colour:'Red',pricePerKg: 150},
                { id: 2, name: 'Orange', colour:'Orange', pricePerKg: 100},
               { id: 3, name: 'Guava', colour:'Green', pricePerKg: 200},
               { id: 4, name: 'Bananna', colour:'Yellow', pricePerKg: 50}];

const fruitDetails = (fruitName) => {
   var result = fruitArray.filter(obj => {
       if(obj.name === fruitName)           
       return console.log(`The price of ${obj.colour} ${fruitName} per kg is ${obj.pricePerKg}`);       
     })}

// test
fruitDetails('Apple');
fruitDetails('Orange');
fruitDetails('Guava');
fruitDetails('Bananna');

