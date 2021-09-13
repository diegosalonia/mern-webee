const router = require("express").Router();
const {
  getSensorsEvent,
  createSensorEvent,
  getSensorEvent,
} = require("../controllers/sensorEventController");

router.get("/", getSensorsEvent);
router.post("/", createSensorEvent);
router.get("/:id", getSensorEvent);

module.exports = router;
