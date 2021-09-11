const express = require("express");
const cors = require("cors");
const config = require('./config/index')
const app = express();


// settings
app.set("port", config.port || 3000);

// middlewares
app.use(cors());
app.use(express.json());

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


module.exports = app;
