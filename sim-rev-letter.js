// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

/*
first I need to split the string into individual pieces
then I need to reverse the string
then I need to filter our non-alpha characters
then I need to reconnect the characters
then I need to return a single string
*/
 
// My solution
reverseLetter = (s) => s.replace(/[^a-z]/gi,'').split('').reverse().join('');