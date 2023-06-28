// ### Filter the Array with callback;
/* write a function 'filterArray'  that takes an array and a callback function as arguments.
'filterArray' should filter the elements of the array based on the condition speicified by the callback function and return a new array with the filter Elements.

*/

function filterArray(arr, cb) {
  let modifiedArray = [];
  for (let i of arr) {
    if (cb(i)) {
      modifiedArray.push(i);
    }
  }
  return modifiedArray;
}
function callback(num) {
  return num % 2 == 0;
}
let array = [10, 13, 12, 15, 18, 20, 22, 23];

console.log(filterArray(array, callback));
