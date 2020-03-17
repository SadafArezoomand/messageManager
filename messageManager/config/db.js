//configurations for connecting to mongodb atlas

const mongoose = require("mongoose");

const dbURI ="mongodb+srv://Sadaf:cSftBSU5mydpI9y2@cluster0-i304t.mongodb.net/test?retryWrites=true&w=majority";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require model
require("../models/messageModel");