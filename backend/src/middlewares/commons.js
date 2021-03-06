const { validationResult } = require("express-validator");
const AppError = require("../errors/appError");

const validResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new AppError("ValidaTion Errors", 400, errors.errors);
  }
};

module.exports = {
  validationResult: validResult,
};
