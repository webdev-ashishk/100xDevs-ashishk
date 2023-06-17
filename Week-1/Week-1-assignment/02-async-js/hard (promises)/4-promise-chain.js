/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js // I can not understand this what means!!!!!
 */

const startTime = new Date().getTime();
console.log(startTime);

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("waitOneSecond is called");
      resolve();
    }, 1000);
  });
}
function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("waitTwoSecond is called");
      resolve();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("waitThreeSecond is called");
      resolve();
    }, 3000);
  });
}
function calculateTime() {
  const endTime = new Date().getTime();
  console.log(endTime);
  // console.log(startTime);
  const result = (endTime - startTime) / 1000;
  console.log(result);
}
waitOneSecond().then(waitTwoSecond).then(waitThreeSecond).then(calculateTime);
