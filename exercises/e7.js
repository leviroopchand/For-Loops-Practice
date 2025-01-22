// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  let posClientAccounts = [];
  
  for (let index = 0; index < array.length; index++) {
      let account = array[index];
      if (account["balance"] > 0.0) {
        posClientAccounts.push(account)
      }
    }

  if (posClientAccounts.length === 0) {
     return [];
    }

  let posClientsBalances = []
  let lowestBalanceAccount = []
  
  for (let index = 0; index < posClientAccounts.length; index++) {
    let account = posClientAccounts[index];
    posClientsBalances.push(account["balance"])
  }

  let minBalance = getMinBalance(posClientsBalances);
  
  for (let index = 0; index < posClientAccounts.length; index++) {
    let account = posClientAccounts[index];
    if (account["balance"] === minBalance) {
      lowestBalanceAccount.push(account)
    }
  }
  return lowestBalanceAccount;
}

let getMinBalance = (posClientsBalances) => {
  let minValue = posClientsBalances[0];
  for (let i = 1; i < posClientsBalances.length; i++) {
    if (posClientsBalances[i] < minValue) {
      minValue = posClientsBalances[i];
    }
  }
  return minValue;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function