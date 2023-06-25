// ### Filter the Array with callback;
/* write a function 'filterArray'  that takes an array and a callback function as arguments.
'filterArray' should filter the elements of the array based on the condition speicified by the callback function and return a new array with the filter Elements.

*/

function filterArray(arr, cb) {
  let modified = [];
  for (let i of arr) {
    let even = i % 2 === 0;
    let modifiedValue = cb(even);
    modified.push(modifiedValue);
  }
  return modified;
}
function callback(numbers) {
  return numbers % 2 == 0;
}

let arr = [10, 20, 30];
console.log(filterArray(arr, callback));
