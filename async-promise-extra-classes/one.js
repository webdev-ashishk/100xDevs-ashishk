/*  ## Synchronous callback
Write a function higherOrder that takes a callback function as an argument. Inside 'higherOrder' call the callback function synchronously.
 */
function hof(cb) {
  console.log("hod is called!!");
  cb();
}
function callback() {
  console.log("cb is called!!");
}
hof(callback);


