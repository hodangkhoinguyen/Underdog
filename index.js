// index.js
// This is our main server file

// include express
const express = require("express");
// create object to interface with express
const bodyParser = require('body-parser');
const app = express();

// Code in this section sets up an express pipeline
app.use(express.static("public"));
// print info about incoming HTTP request 
// for debugging

// a module that gets json out of the request body; not needed yet, but very useful!
app.use(express.json());

// gets text out of the HTTP body and into req.body
app.use(bodyParser.text());

app.use(function(req, res, next) {
  console.log(req.method,req.url);
  next();
})

// make all the files in 'public' available 
app.use(express.static("public"));

// if no file specified, return the main page
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/tiktokpets.html");
});

app.post('/videoData', function(req, res, next) {
  console.log("Server recieved a post request at", req.url);
  let text = req.body;
  console.log("It contained this string:",text);
  res.send("I got your POST request");
});

app.post('/acknowledgement', function(req, res, next) {
  console.log("Server recieved a post request at", req.url);
  let text = req.body;
  console.log("It contained this string:",text);
  res.send("I got your POST request");
});

// Need to add response if page not found!
app.use(function(req, res){ res.status(404); res.type('txt'); res.send('404 - File '+req.url+' not found'); });


// end of pipeline specification

// Now listen for HTTP requests
// it's an event listener on the server!
const listener = app.listen(3000, function () {
  console.log("The static server is listening on port " + listener.address().port);
});