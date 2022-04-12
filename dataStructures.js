// level {1}



// 1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
// Output should be [2, 3, 4]
let array = [1, 2, 3];

let resultantArray = array.map(arr => arr + 1);
console.log(resultantArray)


// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6

let arry = [1, 2, 3];
let summation = array.reduce((a, b) => a + b)
console.log(summation)


// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"

let obj = { name: 'Elie', rank: 'Pro' };
let result = JSON.stringify(obj);
console.log(result);