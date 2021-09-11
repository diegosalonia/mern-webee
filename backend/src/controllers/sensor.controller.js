const Sensor = require("../models/Sensor");
const Success = require("../handlers/successHandler");
const AppError = require("../errors/appError")

const createSensor = async (req, res, next) => {
  const { name, active, minval, maxval, address } = req.body;
  try {
    const sensor = new Sensor({
      name,
      address,
      active,
      minval,
      maxval,
    });
    await sensor.save();
    res.status(201).json(new Success(sensor));
  } catch (error) {
    next(new AppError(error));
  }
};

const getSensors = async (req, res, next) => {
  try {
    const sensors = await Sensor.find();
    res.json(sensors);
  } catch (error) {
    next(error);
  }
};

const getSensor = async (req, res, next) => {
  try {
    const sensor = await Sensor.findById(req.params.id);
    res.json(sensor);
  } catch (error) {
    next(error);
  }
};

const updateSensor = async (req, res, next) => {
  try {
    const { name, address, location, active, minval, maxval } = req.body;
    const sensor= await Sensor.findByIdAndUpdate(req.params._id, {
      name,
      address,
      location,
      active,
      minval,
      maxval,
    });
    res.json(new Success(sensor, { message: "Sensor Updated" }));
  } catch (error) {
    next(error);
  }
};

const deleteSensor = async (req, res, next) => {
  try {
    await Sensor.findByIdAndDelete(req.params._id);
    res.json(new Success({ message: "Sensor Deleted" }));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSensor,
  getSensors,
  getSensor,
  updateSensor,
  deleteSensor,
};
