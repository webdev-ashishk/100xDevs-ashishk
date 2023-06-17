console.log("hello");
let counter = 0;
function callEveryTime() {
  counter++;
  console.clear();
  console.log(counter);
}
setTimeout(callEveryTime, 1000);
