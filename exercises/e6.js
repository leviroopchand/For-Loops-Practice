// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

export function getClientWithNoMoney(array) {
  let brokeClient = [];
  for (let index = 0; index < array.length; index++) {
      let account = array[index];
      if (account["balance"] === 0.0) {
        brokeClient.push(account["name"])
      
      console.log(brokeClient)
    }       
  }}

  getClientWithNoMoney(bankAccounts)

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
