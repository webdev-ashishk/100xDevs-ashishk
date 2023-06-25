// ### Array map with callback !
/* 
Implement a function 'mapArray' that takes an (array and a callback) function as arguments.
'mapArray' should apply the callback function to each element of the array and return a new array with the modified values .

*/

/* let newArray = [];
function mapArray() {
  function cb(ele) {
    if (ele) {
      ele += ele;
      newArray.push(ele);
    }
  }
  // return Array.from(arguments);
  let oldArray = Array.from(arguments);
  console.log(oldArray);
  for (let element of oldArray) {
    cb(element);
    // console.log(element);
  }
}

const old = mapArray(1, 2, 3, 4, 5);
mapArray(old);
console.log(newArray);
 */
function mapArray(array, callback) {
  var modifiedArr = [];
  for (var i of array) {
    var modifiedValue = callback(i);
    modifiedArr.push(modifiedValue);
  }
  return modifiedArr;
}

function multiplyByTwo(num) {
  return num * 2;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var modifiedNumbers = mapArray(numbers, multiplyByTwo);
console.table(modifiedNumbers);
