const router = require("express").Router();
const { login, register } = require("../controllers/auth");
const {
  postLoginRequestValidations,
  postRegisterRequestValidations,
} = require("../middlewares/auth");

router.post("/login", postLoginRequestValidations, login);
router.post("/register", postRegisterRequestValidations, register);

module.exports = router;
