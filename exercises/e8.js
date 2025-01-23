
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let clientAccounts = array;
  let posClientsBalances = [];
  let highestBalanceAccount = [];
  
  for (let index = 0; index < clientAccounts.length; index++) {
    let account = clientAccounts[index];
    posClientsBalances.push(account["balance"])
  }

  let maxBalance = Math.max(...posClientsBalances)
  
  for (let index = 0; index < clientAccounts.length; index++) {
    let account = clientAccounts[index];
    if (account["balance"] === maxBalance) {
      highestBalanceAccount.push(account)
    }
  }
  return highestBalanceAccount;

}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
