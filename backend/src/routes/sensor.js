const router = require("express").Router();
const { getSensors, createSensor, getSensor, updateSensor, deleteSensor } = require('../controllers/sensor.controller')

router.get("/", getSensors);
router.post("/", createSensor);
router.get("/:id", getSensor);
router.put("/:id", updateSensor);
router.delete("/:id", deleteSensor);

module.exports = router;
