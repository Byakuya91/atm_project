"use strict";
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
// DEBUGGER COMPLETE

//TODO: Import necessary functions from atm.js

// Importing functions:   constant functions

const { validatePin } = require("./atm");

// Importing functions: non-constant functions

let { withdraw, deposit, getBalance } = require("./atm");

// test the functions to see if they are detected.

// console.log(validatePin);
// console.log(withdraw);
// console.log(deposit);
// console.log(getBalance);

//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

// testing prompt synch
const input = require("prompt-sync")();

// console.log("Fire or Ice?");

// const elementChoice = input();

// console.log(`${elementChoice} is what I pick!`);

function accessATM() {
  //Proceed to main menu ONLY if they match

  // getting input for the PIN
  console.log("Please enter your four digit pin");
  let accessInput = input();

  // counter to check how many times the user enters their PIN.
  let numberOfAttempts = 0;

  // create a boolean for our listener loop
  let permissionGranted = false;

  // listener loop
  while (!permissionGranted) {
    //  checking if entered PIN is equal to the correct PIN
    if (validatePin(accessInput) === true) {
      console.log("PIN is authenticated.");
      // ending loop if the user gets the right pin.
      permissionGranted = true;
      // execute Main function here
    }
    // checking if the user's PIN length is equal to four
    else if (accessInput.length < 4) {
      console.log("Please enter the correct number of digits");
      console.log("Please enter your four digit pin");
      accessInput = input();
    } else {
      // PIN is not equal to correct PIN
      console.log("PIN do not match!");
      numberOfAttempts++;
      console.log("Please enter your four digit pin");
      accessInput = input();
    }

    // if the user exceeds the numberOfAttempts
    if (numberOfAttempts === 4) {
      console.log("You've exceeded the number of attempts. Acess denied!");
      break;
    }
  }
}

//TODO: Call accessATM function
let testPinAuthentication = accessATM();
console.log(testPinAuthentication);

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit

  // create boolean for listener loop
  let noAccessGranted = false;

  // create display variables
  let balanceDisplay = "";
  let DepositDisplay = "";
  let WithdrawlDisplay = "";
  let ResetDisplay = "";
  let quitDisplay = "";

  // listener Loop
 while(!noAccessGranted){

  // display and take input
  console.log("Welcome! to your account.Please enter the following text to access your account\n('balance','deposit' 'withdraw'). Or you can enter ('restart', 'quit') to restart and quit, respectively.")
  let accountInput = input();

  switch(accountInput){
    case: "quit";
    break;
    case: "balance";
    break;
    case: "deposit";
    break; 
    case:"withdraw":
    break;
    case: "reset";
    break;
    default:
      break;







  }



 }





}

//TODO: Call mainMenu function to start our app!
