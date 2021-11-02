"use strict";
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
const {yourBalance, withdraw, deposit, validationPin} = require("./atm.js");
//TODO: Utilize prompt-sync so we can get user input for various functions
const prompt = require('prompt-sync')();
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

function accessATM() {
  //TODO: Prompt users for their pin
  let userInput = Number(prompt("Please enter your pin: "));
  //Use ATM.js validatePin function to verify pin matches
  if(userInput === validationPin) {
    return true;
  } else {
    console.log("Error");
    return accessATM()
  }
  //Proceed to main menu ONLY if they matchnpm start
}




//TODO: Call accessATM function

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  let choice = Number(prompt("Select a number of what you would like to display 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Restart 5.) Quit"));
  if(choice === 1) {
    yourBalance;
  } else if(choice === 2) {
    deposit;
  } else if(choice === 3) {
    withdraw;
  } else if(choice === 4) {
    return mainMenu();
  } else if(choice === 5) {
    mainMenu().close;
  } else {
    console.log("Error");
  }
  
  //Get current balance

  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit

}

mainMenu();
//TODO: Call mainMenu function to start our app!
