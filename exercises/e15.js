
// EXERCISE 15
// Please, read the exercise-info/concat.md to get the initial data of what is the expected comboArr of this exercise.
// concatArrays(['d', 'r', 'a'], ['f', 'y']) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.concat() method in your code

export function concatArrays(arr1, arr2) {
    let comboArr = [];
    for (let i = 0; i < arr1.length; i++) {
        comboArr.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        comboArr.push(arr2[j]);
    }
    return comboArr;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
