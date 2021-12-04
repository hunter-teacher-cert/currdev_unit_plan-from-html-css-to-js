// here we create an empty string variable and create a variable that controls the window prompt input. PLEASE DO NOT CHANGE THIS CODE!
var boroughCheck="";
var userInput = window.prompt("Name a borough!");

//Step 2 below (we set up what happens when nothing is inputted)
if ((userInput==null)||(userInput=="")){
  boroughCheck="<h1>Nothing was entered. Refresh the page and try again.</h1>";
} else if (userInput=="Manhattan"||userInput="manhattan") {
  boroughCheck="<h1>You are correct!</h1>";
} else if (userInput=="Queens"||userInput="queens") {
  boroughCheck="<h1>You are correct!</h1>";
} else if (userInput=="Bronx"||userInput="bronx") {
  boroughCheck="<h1>You are correct!</h1>";
} else if (userInput=="Brooklyn"||userInput="Brooklyn") {
  boroughCheck="<h1>You are correct!</h1>";
} else if (userInput=="Staten Island"||userInput="Staten Island") {
  boroughCheck="<h1>You are correct!</h1>";
} else {
  boroughCheck="<h1> You are wrong, try again!</h1>";
}
document.write(boroughCheck);
