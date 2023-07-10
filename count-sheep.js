// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

/*
I'll create a variable that will holds the concatenated string
I can create a for loop that concatenates the strings.
The strings will have a template literal for the value of i
*/

// My solution
const countSheep = function (num){
    let string = '';
    for(let i = 1; i <= num; i++){
        string += `${i} sheep...`;
    };
    return string;
}

console.log(countSheep(0))
console.log(countSheep(1))
console.log(countSheep(3))