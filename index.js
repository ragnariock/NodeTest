var express = require('express')
var app = express();

app.set("view","ejs");

app.get('/', function (req, res) {
  res.render('index.ejs');
})

app.listen(3000);
