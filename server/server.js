//this will be server.js

var express = require('express');

var app = express();


app.use(express.static(__dirname + '/../client'));

app.get('/asdf', function(req, res) {
  res.send('hello world');
})

app.listen(4000);
