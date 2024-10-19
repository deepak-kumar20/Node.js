// cookie and sessions are badically used to make rremeber the server who are you like new used in the facebook and the instagram.
// cookie is added at the browser while sending some request to the server it help to make you remeber by the server in such a way that a string is attached to your request;.
//Session-  can be this whole processndoing above between the server and the new user(login to logout process...is a session)
//IT is mainly used in the process of Authentication means in process of login
const express = require("express");
const app = express();

//names are changed to blob ie. unreadable data
//we have to change the blob(it is not write word it is messup) in redable data these two liines are here

app.use(express.json());
app.use(express.urlencoded({ exteded: true }));

app.use((req, res, next) => {
  console.log("malware is starting");
  next();
});
app.get("/", (req, res) => {
  res.send("you are on home page");
});
app.get("/about", (req, res) => {
  res.send("you are on about page");
});
