const express = require("express");
const { Router } = require("express");
const {
  addRequestValidations,
  goAllRequestValidation,
  goRequestValidation,
  updateRequestValidations,
  removeRequestValidations
} = require("../middlewares/sensor/index");
const {
  getSensors,
  createSensor,
  getSensor,
  updateSensor,
  deleteSensor,
} = require("../controllers/sensorController");

const router = Router();

router.post("/", createSensor);
router.get("/", getSensors);
router.get("/:id", getSensor);
router.put("/:id", updateSensor);
router.delete("/:id", deleteSensor);

module.exports = router;
