// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccounts } from "../data/data.js";

export function getAllWithdrawals(array) {
let accountWithdrawals = [];

for (let index = 0; index < array.length; index++) {
  let account = array[index];
  accountWithdrawals.push(account["withdrawals"]);
}

let withdrawalSum = [];

for (let index = 0; index < accountWithdrawals.length; index++) {
  let sum = 0;
  let withdrawalAmt = accountWithdrawals[index];

  for (let j = 0; j < withdrawalAmt.length; j++) {
    sum += withdrawalAmt[j];
  }
  withdrawalSum.push(sum);
}

return withdrawalSum;
}

console.log(getAllWithdrawals(bankAccounts))

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
