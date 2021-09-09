const express = require("express");
const cors = require("cors");
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/sensor", require("./routes/sensor"));
app.use("/api/sensorevent", require("./routes/sensorEvent"));

module.exports = app;
