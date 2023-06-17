// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
const arr = [1, 3, 0];
let sortArr = arr.sort();
let lll = sortArr.length - 1;
console.log(lll);

for (let index = 0; index < sortArr.length; index++) {
  let fvalue = sortArr[index];
  let lvalue = sortArr[lll - 1];
  console.log(fvalue, lvalue);
}
