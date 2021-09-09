const SensorEvent = require("../models/SensorEvent");
const Success = require("../handlers/successHandler");

const getSensorsEvent = async(req, res, next) => {
  try {
    const sensorsEvents = await SensorEvent.find();
    res.json(new Success(sensorsEvents));
  } catch (error) {
    next(error);
  }
};

const createSensorEvent = async (req, res, next) => {
  try {
    const { sensorId, value } = req.body;
    const sensorEvent = new SensorEvent({ sensorId, value });
    await sensorEvent.save();
    res.status(201).json(new Success(sensorEvent));
  } catch (error) {
    next(error);
  }
};

const getSensorEvent = async(req, res, next) => {
  try {
    const sensorEvent = await SensorEvent.findById(req.params.id);
    res.json(new Success(sensorEvent));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSensorsEvent,
  createSensorEvent,
  getSensorEvent,
};
