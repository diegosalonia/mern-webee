const router = require("express").Router();
const { createUser, getById } = require("../controllers/usersController");
const { postRequestValidations, getRequestValidation } = require("../middlewares/users");

router.post("/", postRequestValidations, createUser);
router.get("/:id", getRequestValidation, getById);

module.exports = router;
