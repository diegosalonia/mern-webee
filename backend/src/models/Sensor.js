const { Schema, model } = require("mongoose");

const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    unique: true,
    index: "2dsphere",
  },
});

const sensorSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    location: GeoSchema,
    active: Boolean,
    minval: Number,
    maxval: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Sensor", sensorSchema);
