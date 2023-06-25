import express from "express";
const app = express();
const PORT = 4000;
function home(req, res) {
  res.send("<h1>Welcome to Home Page!</h1>");
}
function about(req, res) {
  res.send("<h2>This is About page ! </h2>");
}

function middleWares(req, res, next) {
  res.json(req.query.name);
  next();
}
app.use(middleWares);
app.get("/", home);
app.get("/about", about);

app.listen(PORT, () => {
  res.send("server is running on http://localhost:" + PORT);
});
