// After a hard quarter in the office you decide to get some rest on a vacation. 
// So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. 
// The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, 
// you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// Pseudo code
/*
Input: single number which equals the total number of days for which you are renting the car
Output: a number that represents your total cost
I need a conditional that takes into account how many days I'm renting the car for. 
This conditional will have three expressions based on 7, 3, or d < 3 days.
*/
// My solution
function rentalCarCost(d){
    if(d >= 7){
        return d * 40 - 50;
    }else if(d >= 3){
        return d * 40 - 20;
    }else{
        return d * 40;
    };
};
console.log(rentalCarCost(1));
console.log(rentalCarCost(3));
console.log(rentalCarCost(7));