"use strict";
//TODO: Import necessary values from account.js

const {accountBalance, pinNumber} = require("./account");
console.log(accountBalance);
console.log(pinNumber);


function getBalance() {
  //TODO: Return the customer's acct. balance
  let customerAccountBalance = accountBalance;
  console.log(customerAccountBalance);
  return customerAccountBalance;
}



function withdraw(withdrawAmount) {
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
  let num1 = accountBalance;
  let userInput = prompt("Enter the ammount you would like to withdraw:");
  let num2 = Number(userInput);
  let newBalance = num1 - num2;
  console.log(newBalance);
  return newBalance
}


function deposit(depositAmount) {
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
  let num1 = balance;
  let userInput = prompt("Enter the ammount you would like to deposit:");
  let num2 = Number(userInput);
  let newBalance = num1 + num2;
  console.log(newBalance);
  return newBalance;
}

function validatePin(enteredPin) {
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
 let enteredPin = Number(prompt("Enter your pin:"));
 if(enteredPin === pinNumber) {
   return true;
 } else {
   return false;
 }
}

module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin,

};

//TODO: Export these functions
