// Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
// and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

/*
Input: string in all lowercase
Output: an array with two elements, each element is a string with alternating case

*/

//My solution
function capitalize(s){
    const even = s.split('').map((el, ind) => ind % 2 == 0 ? el.toUpperCase() : el).join('')
    const odd = s.split('').map((el, ind) => ind % 2 !== 0 ? el.toUpperCase() : el).join('')
    return [even, odd];
};

console.log(capitalize("abcdef"))
console.log(capitalize("codewars"))