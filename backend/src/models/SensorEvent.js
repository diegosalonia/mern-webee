const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const sensorEventSchema = new Schema(
  {
    sensorId: {
      type: Schema.Types.ObjectId,
      ref: "Sensor",
      autopopulate: true,
    },
    value: String,
  },
  {
    timestamps: { createdAt: "createat" },
  }
);

sensorEventSchema.plugin(require("mongoose-autopopulate"));

module.exports = model("SensorEvent", sensorEventSchema);
