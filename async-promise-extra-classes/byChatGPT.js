/* 
1. Imagine you have an array of numbers called `numbers`. Write a function called `calculateSum` that takes in this [array and a callback] function as parameters. The purpose of `calculateSum` is to calculate the sum of all the numbers in the array and pass the sum to the callback function. How would you implement the `calculateSum` function, and how would you call it with a callback function that logs the sum to the console?
 */

//step 1:
function calculateSum(numbers, callback) {
  let init = 0;
  let sum = numbers.reduce((accumlater, index) => {
    return accumlater + index;
  }, init);
  callback(sum);
}

//step 2;

function cb(sum) {
  console.log("cb called " + sum);
}
let numbers = [20, 30, 50];
console.log(calculateSum(numbers, cb));
