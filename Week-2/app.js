const express = require("express");

const app = express();
function countSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my block</h1>`);
});

// This will with UI
/* 

app.get("/info", (req, res) => {
  var counter = req.query.counter;
  var result = "This is calculated from info url:  " + countSum(counter);
  res.send(result);
});
*/

//<-----------This will work With post-man--------------->
/* app.post("/info", (req, res) => {
  var counter = req.query.counter;
  var result = "This is calculated from info url:  " + countSum(counter);
  res.send(result);
});*/
//<----------This will also run on post man------------->
/* app.put("/info", (req, res) => {
  var counter = req.query.counter;
  var result = "This is calculated from info url:  " + countSum(counter);
  res.send(result);
}); */
//<---------This will also run on post-man-------------->
app.delete("/info", (req, res) => {
  var counter = req.query.counter;
  var result = "This is calculated from info url:  " + countSum(counter);
  res.send(result);
});
//<------This is contact route-------------------->
app.get("/contact", (req, res) => {
  res.send(`<h1 style="color:red">This is contact Page</h1>`);
});

//<------This is about route-------------------->
app.get("/about", (req, res) => {
  res.send(`<h1 style="color:green">This is About Page !!</h1>`);
});

app.listen(4000);
