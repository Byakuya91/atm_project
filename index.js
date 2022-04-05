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
  console.log(numberOfAttempts);

  // let checkedAccessinput = parseInt(accessInput);

  // checking if entered PIN equals PIN on record
  if (validatePin(accessInput) === true) {
    console.log("Pin is authenticated");
  } else {
    // PIN is not the same as PIN on record. numberOfAttempts ticked for failure
    console.log("Pin is not authenticated!");
    numberOfAttempts++;
    // recursing through the function
    accessATM();
  }
  // Checking if the PIN length is four. numberofAttempts  ticked if input failed.
  if (accessInput.length < 4) {
    console.log("Please enter the correct number of digits!");
    numberOfAttempts++;
  }

  if (numberOfAttempts > 4) {
    console.log("Sorry, you've used  your maximum attempts.Access denied! ");
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
}

//TODO: Call mainMenu function to start our app!
