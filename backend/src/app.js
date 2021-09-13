const express = require("express");
const cors = require("cors");
const morgan = require('morgan')
const logger = require('./logger/index')
const config = require('./config/index')
const app = express();


// settings
app.set("port", config.port || 3000);

// middlewares
const _middlewares = () => {
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
}
_middlewares()

const _errorHandler = () => {
app.use((err, req, res, next) => {
      const code = err.code || 500;

      logger.error(
        `${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      logger.error(err.stack);

      const body = {
        error: {
          code,
          message: err.message,
          detail: err.data,
        },
      };
      res.status(code).json(body);
    });
  }
_errorHandler();

// routes
app.use(`${config.api.prefix}/sensor`, require("./routes/sensor"));
app.use(`${config.api.prefix}/sensorevent`, require("./routes/sensorEvent"));
app.use(`${config.api.prefix}/users`, require("./routes/users"));
app.use(`${config.api.prefix}/auth`, require("./routes/auth"));



module.exports = app;
