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
console.log(withdraw);
console.log(deposit);
console.log(getBalance);

//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

function accessATM() {
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
}

//TODO: Call accessATM function

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
}

//TODO: Call mainMenu function to start our app!
