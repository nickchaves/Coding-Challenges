// In this Kata, you will be given a string that may have mixed uppercase and 
// lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

/*
Pseudo code
Input: mixed case single string
Output: single string all in the same case
1: split the string into individual characters
1a: create two variables with values of zero
2: create a loop that will check the case of each character
2a: using a conditional, each iteration will increase the value of one of the variables by one 
(depending on the case)
3: create a conditional that will make the original string either all uppercase or lowercase depending on which
variable has a higher value
*/
// My solution
function solve(s){
    s.split('');
    let upper = 0;
    let lower = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i].toUpperCase()){
            upper++
        }else{
            lower++
        }
    }
    if(upper > lower){
        return s.toUpperCase()
    }else{
        return s.toLowerCase()
    }
}
console.log(solve("code"))
console.log(solve("CODe"))
console.log(solve("COde"))
console.log(solve("Code"))