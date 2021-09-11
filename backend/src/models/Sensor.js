const { Schema, model, Decimal28 } = require("mongoose");
const geoCoder = require("../utils/geocoder");

// const GeoSchema = new Schema({
//     coordinates: {
//     type: [Number],
//     unique: true,
//     index: "2dsphere",
//   },
// });

const SensorSchema = new Schema(
  {
    // _id: Schema.Types.ObjectId,
    name: {
      type: String,
      unique: true,
    },
    active: Boolean,
    minval: Number,
    maxval: Number,
    address: {
      type: String,
      required: [true, "Please add an addres"],
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
      },
      formattedAddress: String,
    },
  },
  {
    timestamps: true,
  }
);

// Geocode and create location
SensorSchema.pre("save", async function (next) {
  const loc = await geoCoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[1].latitude],
    formattedAddress: loc[0].formattedAddress
  }

  // Do not Saved Address
  this.address = undefined;
  next();
});

module.exports = model("Sensor", SensorSchema);
