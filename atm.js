"use strict";
//TODO: Import necessary values from account.js
let { personalPin } = require("./account");
// let { personalBalance } = require("./account");
let { deposit, withdraw, getBalance } = require("./account");

// test imported variables.
// console.log(personalPin);
// console.log(personalBalance);
// console.log(withdraw);
// console.log(getBalance);

function validatePin(enteredPin) {
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.

  return parseInt(enteredPin) === personalPin;
}

// function to access the ATM

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

      // execute Main function here
      mainMenu();
      // ending the listener loop upon entering the mainMenu
      break;
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

// test the validate PIN function

// let testPin = validatePin(2191);
// console.log(testPin);

// test the accessATM function
let testAccess = accessATM();

console.log(testAccess);

// main Menu function
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
  while (!noAccessGranted) {
    // display and take input
    console.log(
      "\nWelcome!\nPlease enter the following text to access your account:\n('balance','deposit' 'withdraw').\n Or you can enter:\n ('restart', 'quit') to restart and quit, respectively."
    );
    let accountInput = input();

    switch (accountInput) {
      case "quit":
        // storing message
        quitDisplay =
          "This application will be closing. Thank you for accessing it.";
        // displaying message
        console.log(quitDisplay);
        // quiting the application.
        noAccessGranted = true;
      case "balance":
        // run the balance function
        let totalBalance = getBalance();
        balanceDisplay = `\nYour total balance is: ${totalBalance}`;
        console.log(balanceDisplay);
        break;
      case "deposit":
        // take in input for the deposit.
        console.log("Please enter how much you wish to deposit: ");
        let depositedInput = input();
        // running the deposit function. Note converting input to Int due to balance being an Int.
        let depositedBalance = deposit(parseInt(depositedInput));
        // displaying what amount was added
        DepositDisplay = `You have deposited ${depositedInput} towards your account.`;
        console.log("\n" + DepositDisplay);
        break;
      case "withdraw":
        // take in input for withdrawl
        console.log("Please enter how much you wish to withdraw: ");
        let withdrawInput = input();
        // run the withdraw function and like deposit covert the input
        let withdrawBalance = withdraw(parseInt(withdrawInput));
        WithdrawlDisplay = `You have withdrawn ${withdrawInput} from your account.`;
        console.log("\n" + WithdrawlDisplay);
        break;
      case "restart":
        ResetDisplay = " Restarting the program";
        console.log(ResetDisplay);
        // let newBalance = getBalance();
        return mainMenu();
        break;
      default:
        console.log("Invalid input. Please enter the appropirate input.");
        break;
    }
  }
}

// test the Main Menu function
// let testMainMenu = mainMenu();

// console.log(testMainMenu);

//TODO: Export these functions

module.exports = {
  accessATM: accessATM,
  mainMenu: mainMenu,
};
