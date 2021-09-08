const Sensor = require("../models/Sensor");
const Success = require("../handlers/successHandler");

const createSensor = async (req, res, next) => {
  const { name, location, active, minval, maxval } = req.body;
  try {
    const sensor = new Sensor({
      name,
      location,
      active,
      minval,
      maxval,
    });
    await sensor.save();
    res.status(201).json(new Success(sensor));
  } catch (error) {
    next(error);
  }
};

const getSensors = async (req, res, next) => {
  try {
    const sensors = await Sensor.find();
    res.json(new Success(sensors));
  } catch (error) {
    next(error);
  }
};

const getSensor = async (req, res, next) => {
  try {
    const sensor = await Sensor.findById(req.params.id);
    res.json(new Success(sensor));    
  } catch (error) {
    next(error)
  }
};

const updateSensor = async (req, res, next) => {
  try {
    const { name, location, active, minval, maxval } = req.body;
    await Sensor.findByIdAndUpdate(req.params.id, {
      name,
      location,
      active,
      minval,
      maxval,
    });
    res.json(new Success({ message: "Sensor Updated" }));    
  } catch (error) {
    next(error)
  }
};

const deleteSensor = async (req, res, next) => {
  try {
    await Sensor.findByIdAndDelete(req.params.id);
    res.json(new Success({ message: "Sensor Deleted" }));    
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createSensor,
  getSensors,
  getSensor,
  updateSensor,
  deleteSensor,
};
