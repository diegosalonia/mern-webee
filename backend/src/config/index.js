const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("Couldn't find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  port: process.env.PORT,
  api: {
    prefix: "/api",
  },
  log: {
    level: process.env.LOG_LEVEL,
  },
  database: {
    URI: process.env.MONGODB_URI,
  },
  auth: {
    secret: process.env.AUTH_SECRET,
    ttl: process.env.AUTH_TTL,
  },
};
