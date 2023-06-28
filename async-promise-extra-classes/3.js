/* 
Implement a function 'mapArray' that takes an (array and a callback) function as arguments.
'mapArray' should apply the callback function to each element of the array and return a new array with the modified values .

*/

function mapArray(array1, cb) {
  let arr = [];
  for (let i of array1) {
    const a = cb(i);
    arr.push(a);
  }
  return arr;
}
//num i current value which processed by array1
function callback(num) {
  return num + 1;
}

let array = [10, 11, 12, 13, 14, 15];
console.log(mapArray(array, callback));
