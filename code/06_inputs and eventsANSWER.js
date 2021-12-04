// STEP 1: Grab your IDs from the inputs and the div
let password= document.querySelector("#passCode");
let username= document.querySelector("#userName");
let logIn= document.querySelector("#logged");
let clickMe= document.querySelector("#clickMe");
let wrong=0; //this is for the incorrect password counter for step 4

// STEP 2: CREATE THE EVENT LISTENER FOR THE BUTTON.
clickMe.addEventListener("click", e=>{
// STEP 3: IF THE PASSWORD AND USERNAME ARE CORRECT, USE innerHTML ON THE LOG IN VARIABLE TO DISPLAY THAT YOU HAVE LOGGED IN. ELSE, DISPLAY THAT THEY SHOULD TRY AGAIN!
  if (password.value=="parkeast123" && username.value.toLowerCase() =="parkeasths"){
    logIn.innerHTML="You logged in!";
  } else{
    logIn.innerHTML="Try Again.";
    wrong=wrong+1;
// STEP 4: LET'S REMEMBER TO ADD A COUNTER. IF THE OF TRIES REACHES 3, DISPLAY ACCOUNT LOCKED ERROR MESSAGE BELOW.
    if(wrong>=3){
      logIn.innerHTML="Locked";
    clickMe.parentNode.removeChild(clickMe);
    }
  }
})
