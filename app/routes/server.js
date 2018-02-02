// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var waitingList =
[{
  routeName: "someName",
  customerName: "", 
  customerEmail: "afhaque89@gmail.com", 
  customerID: "afhaque89", 
  phoneNumber: "979-587-0887"
}];

var reservations =
[{
  routeName:"someOtherName",
  customerName: "", 
  customerEmail: "afhaque89@gmail.com", 
  customerID: "afhaque89", 
  phoneNumber: "979-587-0887"
}];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
  // res.sendFile(path.join(__dirname,  ));
  console.log(JSON.stringify(waitingList));
});

// Get all characters
app.get("/all", function(req, res) {
  res.json(reservations);
});



app.get("/api/:reservations?", function(req, res) {
  var chosen = req.params.reservations;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < customerName.length; i++) {
      if (chosen === customerName[i].routeName) {
        return res.json(customerName[i]);
      }
    }
    return res.json(false);
  }
  return res.json(customerName);
});


// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.customerName.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);
  res.json(reservations);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
