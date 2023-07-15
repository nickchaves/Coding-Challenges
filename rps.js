// Create a rock papers scissors game

/*
Pseudo code
Input: two separate string
Output: 'Player 1 won' || 'Player 2 won' || 'Draw'
*/

// My solution
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
};

console.log(rps('rock', 'paper'));
console.log(rps('paper', 'paper'));
console.log(rps('scissors', 'paper'))
