/* Write a Program to Flatten a given n-dimensional array */

const baseFlatten = (array, depth, result) => {
	let index = -1
	let length = array.length
	result || (result = [])
  
	while (++index < length) {
	  let value = array[index]
	  if (depth > 0 && Array.isArray(value)) {
		if (depth > 1) {
		  // Recursively flatten arrays (susceptible to call stack limits).
		  baseFlatten(value, depth - 1, result)
		} else {
		  result.push(value)
		}
	  } else {
		result.push(value)
	  }
	}
	return result;
  }
  
  /*
   * Flatten a deep array function
   * @param array : array
  */
  const flatten = (array) => {
	  if(Array.isArray(array)){
	const length = array ? array.length : 0
	// console.log(length);
	let output = length ? baseFlatten(array, 5) : []
	// console.log(output);
	return output
	  }else {
		  return null;
	  }
  }
  
  // test
  const arr = [1, [2, 3], [[4], [5]]];
  // console.log(flatten(arr));
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
