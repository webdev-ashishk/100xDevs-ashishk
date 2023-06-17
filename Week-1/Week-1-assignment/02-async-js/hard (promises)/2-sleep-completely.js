/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(n) {
  for (let i = 0; i <= n; i++) {
    console.log("busy");
  }
}
sleep(1000000000);
console.log("a");
console.log("b");
console.log("c");
console.log("d");
console.log("e");
