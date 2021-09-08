const SensorEvent = require("../models/SensorEvent");
const Success = require("../handlers/successHandler");

const getSensorsEvent = (req, res, next) => {
  res.json([]);
};

 const createSensorEvent = async(req, res, next) => {
   try {
    const { sensorId, value } = req.body;
    const sensorEvent = new SensorEvent({sensorId, value});
    await sensorEvent.save();
    res.status(201).json(new Success(sensorEvent));
  } catch (error) {
    next(error);
  }
};

const getSensorEvent = (req, res, next) => {
  res.json({ message: " GET - Routes Sensor" });
};

module.exports = {
  getSensorsEvent,
  createSensorEvent,
  getSensorEvent
};
