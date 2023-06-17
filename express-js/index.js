const express = require("express");
const path = require("path");
const app = express();
// const port = 4000;
// using middleware concept here!
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Provide Your Age!?");
  } else if (req.query.age < 18) {
    res.send("You are less then 18 NOT Allowed!");
  } else {
    next();
  }
};
app.use(reqFilter);
// end of middleware concept

app.get("/", (req, res) => {
  res.send("Welcome!!");
});
app.get("/ashish", (req, res) => {
  res.sendFile(path.join(__dirname, "ashish.html"));
});
app.get("/nitin", (req, res) => {
  res.sendFile(path.join(__dirname, "nitin.html"));
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
app.listen(5000);
