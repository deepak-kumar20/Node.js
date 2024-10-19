//express js is a npm package that looks upom recivsing request and sending resposnse
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('middle ware running..');
    next();//sending request to the next element that is the  server
})
app.get('/', function (req, res) {
    res.send('Hellosss world from my sidee')
});
app.get("/profile", function (req, res) {
  res.send("my name is deepak");
});
app.get('/about', (req, res, next) => {
    return next(new Error('something went wrong'))
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something broke')
})
app.listen(3000);