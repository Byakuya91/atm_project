"use strict";
//TODO: Import necessary values from account.js
let { personalPin } = require("./account");
let { personalBalance } = require("./account");

// test imported variables.
// console.log(personalPin);
// console.log(personalBalance);

function getBalance() {
  //TODO: Return the customer's acct. balance
  return personalBalance;
}

function withdraw(withdrawAmount) {
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
  return (personalBalance -= withdrawAmount);
}

function deposit(depositAmount) {
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
  return (personalBalance += depositAmount);
}

function validatePin(enteredPin) {
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.

  return parseInt(enteredPin) === personalPin;
}

// test the functions

// let testBalance = getBalance();
// console.log(testBalance);

// let testWithdrawl = withdraw(100);
// console.log(testWithdrawl);

let testDesposit = deposit(100);
console.log(testDesposit);

// let testPin = validatePin(2191);
// console.log(testPin);

//TODO: Export these functions

module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin,
};
