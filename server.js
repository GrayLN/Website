// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/home.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
app.get("/home.html", function(request, response) {
  response.sendFile(__dirname + "/views/home.html");
});
app.get("/mybiography.html", function(request, response) {
  response.sendFile(__dirname + "/views/mybiography.html");
});
app.get("/log-in.html", function(request, response) {
  response.sendFile(__dirname + "/views/log-in.html");
});
app.get("/sign-up.html", function(request, response) {
  response.sendFile(__dirname + "/views/sign-up.html");
});
app.get("/project.html", function(request, response) {
  response.sendFile(__dirname + "/views/project.html");
});
app.get("/3d-print.html", function(request, response) {
  response.sendFile(__dirname + "/views/3d-print.html");
});
app.get("/final-project.html", function(request, response) {
  response.sendFile(__dirname + "/views/final-project.html");
});
app.get("/vidcode.html", function(request, response) {
  response.sendFile(__dirname + "/views/vidcode.html");
});