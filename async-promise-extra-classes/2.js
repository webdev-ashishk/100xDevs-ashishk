/* ## Asynchronous callback 

Write 'higherOrderAsynchronous' function  that takes a callback function as argument inside 'higherOrderAsynchronous', call the callback  function asynchronously using setTimeout after a delay of n seconds where n is current day of  the month according to UTC time(1<=n<=31)

*/

function hof(cb) {
  const n = new Date().getDate();
  //asynchronous callback
  setTimeout(() => {
    cb();
  }, n * 1000);
}
function callback() {
  console.log("async cb called !!");
}
hof(callback);
console.log("continue with other tasks!");
