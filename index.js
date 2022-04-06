"use strict";
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
// DEBUGGER COMPLETE

//TODO: Import necessary functions from atm.js

// Importing functions:   constant functions

let { accessATM, mainMenu } = require("./atm");

console.log(accessATM);

// Importing functions: non-constant functions

// let { withdraw, deposit, getBalance } = require("./atm");

// test the functions to see if they are detected.

// console.log(validatePin);
// console.log(withdraw);
// console.log(deposit);
// console.log(getBalance);

//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

// testing prompt synch
// const input = require("prompt-sync")();

// console.log("Fire or Ice?");

// const elementChoice = input();

// console.log(`${elementChoice} is what I pick!`);

// function accessATM()

//TODO: Call accessATM function
// let testPinAuthentication = accessATM();

// console.log(testPinAuthentication);

// function mainMenu()

//TODO: Call mainMenu function to start our app!

// mainMenu();
