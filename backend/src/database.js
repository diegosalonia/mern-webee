const mongoose = require("mongoose");
const config = require('./config/index')


mongoose.Promise = global.Promise;

const URI = config.database.URI
  ? config.database.URI
  : "mongodb://localhost/databasetest";

mongoose.connect(URI, { useNewUrlParser:true, useUnifiedTopology: true }
  );

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB is conected");
});
