/* Target is write here one expensive function[oneProcess.js] which will access by secondProcess.js backend sever  

It's meaning that backend server talk to backend server!

*/

const express = require("express");
const app = express();
const port = 5000;

function countSum(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    count += i;
  }
  return count;
}

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Awesome! Site</h1>");
});

app.get("/count", (req, res) => {
  res.send("count slace workings!");
});

app.get("/count/:num", (req, res) => {
  let getNum = req.params.num;
  res.json(countSum(getNum));
});

app.listen(port, () => {
  console.log("server is listening on http://localhost:" + port);
});
