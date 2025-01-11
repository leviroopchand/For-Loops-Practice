
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data.js";

export function getClientsWithWrongBalance(array) {
let wrongBalances = [];

for (let index = 0; index < array.length; index++) {
  let account = array[index];
  let deposits = account["deposits"];
  let withdrawals = account["withdrawals"];
  let balance = account["balance"];
  let sumDeposits = 0;
  let sumWithdrawals = 0;

  for (let j = 0; j < deposits.length; j++) {
    sumDeposits += deposits[j];
  }
  for (let k = 0; k < withdrawals.length; k++) {
    sumWithdrawals += withdrawals[k];
  }
  let correctBalance = sumDeposits - sumWithdrawals;

  if (correctBalance !== balance) {
    wrongBalances.push(account);
  }
}

return wrongBalances;  
}

console.log(getClientsWithWrongBalance(bankAccounts))



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
