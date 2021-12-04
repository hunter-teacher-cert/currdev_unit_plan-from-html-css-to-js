// STEP 1: We pull all the IDs we can find in the index and store them in their own variable. We cannot just use them as is because of the symbols attached to IDs and Classes. Find the rest!
var userInput = window.prompt("Give a noun");
var firstNoun= userInput;
console.log(firstNoun)
userInput= window.prompt("Give an adjective");
var firstAdj= userInput;
userInput= window.prompt("Give another noun");
var secondNoun= userInput;
userInput= window.prompt("Give another adjective");
var secondAdj= userInput;

var adj1= document.querySelector("#adjective1");
var adj2= document.querySelector("#adjective2");
var noun1= document.querySelector("#noun1");
var noun2= document.querySelector("#noun2");

// STEP 2: We use the new variables and assign them some fun words using innerHTML. What would you like to add?
adj1.innerHTML=firstAdj;
adj2.innerHTML=secondAdj ;
noun1.innerHTML=firstNoun;
noun2.innerHTML=secondNoun;

// STEP 3: Run the program and see your silly madlib!
