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
