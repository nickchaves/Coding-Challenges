// Create a function named divisors/Divisors that takes an integer n > 1
// and returns an array with all of the integer's divisors(except for 1 and the number itself), 
// from smallest to largest. If the number is prime return the string '(integer) is prime'
// (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
 
/*
input: single digit
output: array of one or more numbers or 'n is prime'
i'll create a loop that tests whether the input is divisible by i
if the input is divisible by i, i'll add i to the array
*/

// My solution
function divisors(integer) {
    let divArr = [];
    for(let i = 2; i < integer; i++){
        if(integer % i === 0){
            divArr.push(i);
        }
    };
    if(divArr.length > 0){
        return divArr;
    }else{
        return `${integer} is prime`
    };
};
console.log(divisors(13))