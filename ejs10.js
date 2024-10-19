const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs"); //for rendering the frontened according to the backe
//created route
app.get("/", (req, res) => {
  res.render("index");
});
//route
app.get("/profile/:username", (req, res) => {
  res.send(`welcome, ${req.params.username}`);
});

app.get("/author/:username/:age", (req, res) => {
  res.send(`welcome,${req.params.username} of ${req.params.age}`);
});

app.listen(3000, function () {
  console.log("sterted...");
});
