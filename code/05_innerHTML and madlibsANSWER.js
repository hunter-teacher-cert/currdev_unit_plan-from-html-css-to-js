// STEP 1: Let's set up window.prompt() again and ask the user for a noun. We will store it in a variable called userInput.
var userInput = window.prompt("Give a noun");

// Step 2: We need to store our user input into a variable for our first noun. If we don't store the input, next time we type into the console, we wil lose our information.
var firstNoun= userInput;

// Step 3: Rinse and repeat! Let's do the same for our adjectives and second noun. No need to make a new variable for userInput. Just call and store our next window.prompt().
userInput= window.prompt("Give an adjective");
var firstAdj= userInput;
userInput= window.prompt("Give another noun");
var secondNoun= userInput;
userInput= window.prompt("Give another adjective");
var secondAdj= userInput;

// STEP 4: We pull all the IDs we can find in the index and store them in their own variable. We cannot just use them as is because of the symbols attached to IDs and Classes. Find the rest!
var adj1= document.querySelector("#adjective1");
var adj2= document.querySelector("#adjective2");
var noun1= document.querySelector("#noun1");
var noun2= document.querySelector("#noun2");

// STEP 5: We will use innerHTML to insert the userInput that we stored in the variables in steps 2 and 3. The first is done for you. Fill in the rest!
adj1.innerHTML=firstAdj;
adj2.innerHTML=secondAdj ;
noun1.innerHTML=firstNoun;
noun2.innerHTML=secondNoun;

// STEP 6: Run the program and see your silly madlib!
