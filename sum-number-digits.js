// Write a function named sumDigits which takes a number as input and returns the sum of the 
// absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// My solution
function sumDigits(number) {
    const updatedArr = number.toString().split('')
    if(updatedArr[0] === '-'){
        updatedArr.shift()
        const newArr = updatedArr.map(Number)
        return newArr.reduce((a,b) => a + b)
    }else{
        const newArr = updatedArr.map(Number)
        return newArr.reduce((a,b) => a + b)
    }
}

console.log(sumDigits(-32))
console.log(sumDigits(99))
console.log(sumDigits(10))