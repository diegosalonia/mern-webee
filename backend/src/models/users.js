const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const enu = ['USER_ROLE', 'ADMIN_ROLE']

const UserSchema = new Schema(
  {
    // Model attributes are defined here
    name: {
      type: String,
    },
    password: {
      type: String,
      required: [true, 'Pasword required']
    },
    email: {
      type: String,
      required: [true, 'Email required'],
      unique: true
    },
    role: {
      type: String,
      enum: enu
    },
  },
  {}
);

module.exports = model("User", UserSchema);
