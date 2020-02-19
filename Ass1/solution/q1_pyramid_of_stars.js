/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
    let result ='';
    if(typeof n === 'number' && n>0){
       let j = n;
    // Write your code here
    for(let i=1; i<= n; i++){
        let str = ' '.repeat(j);
        let str2 = '* '.repeat(i) + ' \n';
        result = result+str+str2;
        j -= 1;
        }
     
    } else {
        return '';
    }
    
    // console.log(result);
    return result;
};

buildPyramid(6)

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
