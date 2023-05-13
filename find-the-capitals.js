// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//My solution
function capitals(word) {
    const mod = word.split('')
    let indexArr = []
    mod.forEach((x,y) => {
        if(x == x.toUpperCase()){
            indexArr.push(y)
        }
    })
    return indexArr
}

console.log(capitals('CodEWaRs'))
