/* Write a Program to convert an array of objects to an object
	based on a given key */


// Write your code here
const testObj = [{ id: 1, name: 'Ankit', role: 'Developer'},
				{ id: 2, name: 'Pankhuri', role: 'Lead'},
				{ id: 3, name: 'Anubha', role: 'QA'}];

let peopleArray = [{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}];
const convertBasedOnKey = (array, keyField) =>
   array.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {});

const convert = (array, keyField) => {
  if(Array.isArray(array)){
    
    return convertBasedOnKey(array, keyField);
  }else {
    return null;
  }
}

const peopleObject = convert(testObj , 'role')
// console.log(peopleObject);

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
