const router = require("express").Router();
const { createUser, getById } = require("../controllers/users");
const { postRequestValidations, getRequestValidation } = require("../middlewares/users");

router.post("/", postRequestValidations, createUser);
router.get("/:id(\\d+)/", getRequestValidation, getById);

module.exports = router;
