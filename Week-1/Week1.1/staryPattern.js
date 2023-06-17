// function ashish(num) {
//   for (var i = 0; i < num; i++) {
//     console.log("*");
//   }
// }
// ashish(5);
function printTriangleStars(numRows) {
  for (let i = 1; i <= numRows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// Example usage:
printTriangleStars(5);
