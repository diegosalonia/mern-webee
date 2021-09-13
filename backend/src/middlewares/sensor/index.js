// const { check } = require("express-validator");
// const AppError = require("../../errors/appError");
// const Sensor = require("../../models/Sensor");
// const { ROLES, ADMIN_ROLE } = require("../../constants");
// const logger = require("../../logger/index");
// const { validationResult } = require("../commons");
// const { validJWT, hasRole } = require("../auth");


// const _nameRequired = check("name", "Name required").not().isEmpty();

// const _addressRequired = check("address", "Address required").not().isEmpty()

// const _roleValid = check("role").optional().custom( async(role = "") => {
//     if (!ROLES.includes(role)) {
//       throw new AppError("Ivalid Role", 400);
//     }
//   });

// const _idExist = check("id").custom(async (id = "") => {
//   const sensorFound = await Sensor.findById(id);
//   if (!sensorFound) {
//     throw new AppError("The id does not exist in DB", 400);
//   }
// });

// const _nameNotExist = check("name").custom(async (name = "") => {
//   const sensorFound = await Sensor.findOne({ name: name });
//   if (sensorFound) {
//     throw new AppError("The name exist in DB", 400);
//   }
// });

// const _addressNotExist = check("address").custom(async (address = "") => {
//   const addressFound = await Sensor.findOne({ address: address });
//   if (addressFound) {
//     throw new AppError("The name exist in DB", 400);
//   }
// });

// const addRequestValidations = [
//   validJWT,
//   hasRole(ADMIN_ROLE),
//   _roleValid,
//   _nameRequired,
//   _nameNotExist,
//   _addressRequired,
//   _addressNotExist,
//   validationResult,
// ];

// const goAllRequestValidation = [validJWT, hasRole(ADMIN_ROLE)];

// const goRequestValidation = [
//   validJWT,
//   _idExist,
//   validationResult,
// ];

// const updateRequestValidations = [
//   validJWT,
//   hasRole(ADMIN_ROLE),
//   _idExist,
//   validationResult,
// ];

// const removeRequestValidations = [
//   validJWT,
//   hasRole(ADMIN_ROLE),
//   _idExist,
//   validationResult,
// ];

// module.exports = {
//   addRequestValidations,
//   goAllRequestValidation,
//   goRequestValidation,
//   updateRequestValidations,
//   removeRequestValidations,
// };
