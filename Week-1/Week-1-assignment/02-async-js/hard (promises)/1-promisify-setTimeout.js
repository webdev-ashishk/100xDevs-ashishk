/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
/*
Sure! Here's an explanation of how to write such a function in simple English:

To write a function that returns a promise, which is a special object in JavaScript used for asynchronous operations, you can follow these steps:

1. Define the function and give it a name, let's say it's called "delay".
2. The function should take a single argument, let's call it "seconds", which represents the number of seconds to wait before resolving the promise.
3. Inside the function, create a new promise using the Promise constructor. The constructor takes a callback function as an argument.
4. Within the callback function, use the setTimeout() function to delay the resolution of the promise. The setTimeout() function takes a callback function and a time in milliseconds.
5. Convert the "seconds" argument to milliseconds by multiplying it by 1000 (since there are 1000 milliseconds in a second).
6. Pass the callback function to setTimeout() and set the delay time to the converted milliseconds.
7. In the callback function, call the resolve() function to indicate that the promise has been successfully resolved after the specified delay.
8. Return the promise object from the function.

By following these steps, you will have a function named "delay" that returns a promise. When you call this function with a specific number of seconds, it will create a promise that resolves after that many seconds have passed.
*/
function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}
wait(5).then(() => {
  console.log("promise resolved after 5 seconds");
});

// We try to write above code using callback!
function delay(n) {
  function callback() {
    console.log("callback is called after 10 seconds");
  }
  setTimeout(callback, n);
}
delay(10000);
