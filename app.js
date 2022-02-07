const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//setting
app.set("view engine", "ejs");
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));



//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/courses", (req, res) => {
  res.render("courses");
});

app.get("/codeplayground", (req, res) => {
  res.render("codeplayground");
});

app.get("/discuss", (req, res) => {
  res.render("discuss");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.listen(port, () => {
  console.log("server is working on " + port);
});
