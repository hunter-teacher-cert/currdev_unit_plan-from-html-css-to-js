console.log("Hello, I work!");

  //--------------------------------------
//Let's practice conditionals below! We will be using the console for this lab.

var randomNumber = Math.floor((Math.random()*10)+1);

var guess= 6;

if (guess==randomNumber){
console.log("congrats you got it right!");
} else if (guess>randomNumber){
console.log("your guess is too high!");
} else {
console.log("you guessed too low!");
}

// Homework for lesson 2, lab 2
// Now that we learned a little about creating variables, create a program in Javascript that converts a value from a variable
// from one measurement to another. Print this in the console in a sentence. Remember tat variables can do all kinds of calculations.
// Use the w3schools or our slides as a guide. Below is a list of examples:
//  * feet to inches
//  * Celcius to Farenheit or Kelvin
//  * meters to feet

//*Possible Answer*:

//var feet= 10; var toInches= feet * 12;

//console.log(feet+ " feet to inches = " + toInches);
