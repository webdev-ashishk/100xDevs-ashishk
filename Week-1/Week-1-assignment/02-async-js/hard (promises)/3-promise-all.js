/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */
const startTime = new Date().getTime();
console.log(`startTime: ${startTime}`);

function waitOneSecond() {
  return new Promise((resolve) => {
    function callback1() {
      console.log("callback-1 called!");
      resolve();
    }
    setTimeout(callback1, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    function callback2() {
      console.log("callback-2 called!");
      resolve();
    }
    setTimeout(callback2, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    function callback3() {
      console.log("callback-3 called!");
      resolve();
    }
    setTimeout(callback3, 3000);
  });
}

function calculateTime() {
  const endTime = new Date().getTime();
  const result = (endTime - startTime) / 1000;
  console.log(`Total time taken: ${result}`);
}

function usesAllFunctions() {
  return new Promise((resolve) => {
    function completed() {
      console.log("completed!");
      resolve();
    }
    setTimeout(completed, 1000);
  });
}
waitOneSecond()
  .then(waitTwoSecond)
  .then(waitThreeSecond)
  .then(calculateTime)
  .then(usesAllFunctions);
