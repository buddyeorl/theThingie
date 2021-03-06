// start of server

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var api = require ("./routes/apiRoutes");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

api(app);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// end of server