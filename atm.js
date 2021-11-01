"use strict";
//TODO: Import necessary values from account.js
const prompt = require('prompt-sync')();


const {balance, pin} = require("./account");
console.log(balance);
console.log(pin);


function getBalance() {
  //TODO: Return the customer's acct. balance
  return balance;
}


function withdraw(withdrawAmount) {
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
  let num1 = balance;
  let userInput = prompt("Enter the ammount you would like to withdraw:");
  let num2 = Number(userInput);
  let newBalance = num1 - num2;
  console.log(newBalance);
}

function deposit(depositAmount) {
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
  let num1 = balance;
  let userInput = prompt("Enter the ammount you would like to deposit:");
  let num2 = Number(userInput);
  let newBalance = num1 + num2;
  console.log(newBalance);
}

function validatePin(enteredPin) {
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
}

//TODO: Export these functions
