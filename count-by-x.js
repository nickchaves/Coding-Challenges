// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

/* Pseudo code
First I need to create an empty array that will store the results
Then I need to create a loop that will push elements into the array
I need my conditional to push elements that are incremented by X
These elements will only get pushed if the length of my array is less than N
Return the array
*/

// My solution
function countBy(x, n) {
    let solution = [];
    for(let i = x; solution.length < n; i += x){
        solution.push(i);
    }
    return solution;
}

console.log(countBy(1,10))
console.log(countBy(2,5))
console.log(countBy(3,4))