// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

/*
Input: single integer
Output: single integer
First I need something that checks if n is already divisible by 5
If not, I need something that will increment n  by 1 unti it reaches a multiple of 5
I need something that is checking every iteration up until it reaches a multiple of 5
*/

// My solution
function roundToNext5(n){
    while(n % 5 !== 0){
        n++
    };
    return n;
}
console.log(roundToNext5(10))
console.log(roundToNext5(3))