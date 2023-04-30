// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//My solution
let isAnagram = function(test, original) {
    const word1 = test.toUpperCase().split('').sort().join('');
    const word2 = original.toUpperCase().split('').sort().join('');
    return word2 == word1
};
console.log(isAnagram("foefet", "toffee"))