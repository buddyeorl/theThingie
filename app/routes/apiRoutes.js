// Start of routes

var waitingList = require ("../data/waitingList");
var reservation = require ("../data/reservation");

module.exports = function (app) {

// DeVON, GET THE TABLES! (this pulls data from the waitinglist)
app.get("/", function(req, res) {
    res.json (waitingList);
   });

   app.get("/all", function (req, res) {
    res.json (reservation);
   });

};

