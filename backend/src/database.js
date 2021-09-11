const mongoose = require("mongoose");
const config = require('./config/index')

const URI = config.database.URI
  ? config.database.URI
  : "mongodb://localhost/databasetest";

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is conected");
});
