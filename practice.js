const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    if (err) {
      console.error("Error reading files:", err);
      return res.status(500).send("Error reading files.");
    }
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(`./files/${req.body.title.split(" ").join('')}.txt`, req.body.details, (err) => {
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log("i am started..");
});
