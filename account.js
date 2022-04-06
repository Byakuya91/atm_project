"use strict";
//! START HERE! Then atm.js, then index.js
//! Remember to run npm init to create your Node application!

//TODO: Create variables for account balance & account pin

let personalPin = 2191;

let personalBalance = 1000;

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

// test the functions

// let testBalance = getBalance();
// console.log(testBalance);

// let testWithdrawl = withdraw(100);
// console.log(testWithdrawl);

// let testDesposit = deposit(100);
// console.log(testDesposit);

module.exports = {
  personalPin: personalPin,
  personalBalance: personalBalance,
  deposit: deposit,
  withdraw: withdraw,
  getBalance: getBalance,
  personalPin: personalPin,
};
