const express = require("express");
const bodyParser = require("body-parser");

// Configuring the database
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create express app
const app = express();

// parse requests of content-type - application/x-www-form urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// connecting to the database
mongoose
  .connect(dbConfig.url, {
    userNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch(err => {
    console.log("Could not connect to database.", err);
    process.exit();
  });

// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to EasyNotes application" });
});

// Routes
require("./app/routes/note.routes")(app);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
