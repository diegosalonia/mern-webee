const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    // Model attributes are defined here
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["USER_ROLE", "ADMIN_ROLE"],
      default: "USER_ADMIN",
    },
  },
  {}
);

module.exports = User;
