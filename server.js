var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('./client/index.html');
});

app.use('/', require('./server/auth/routes'));

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
