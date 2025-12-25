const express = require("express");

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");

const router = express.Router();

// /api/v1/airplanes
router.post(
  "/",
  AirplaneMiddleware.validateCreateRequest,
  AirplaneController.createAirplane
);

// /api/v1/airplanes GET
router.get("/", AirplaneController.getAirplanes);

// /api/v1/airplanes/:id GET
router.get(
  "/:id",
  AirplaneMiddleware.validateId,
  AirplaneController.getAirplane
);

// /api/v1/airplanes/:id DELETE
router.delete(
  "/:id",
  AirplaneMiddleware.validateId,
  AirplaneController.destroyAirplane
);

// /api/v1/airplanes/:id PATCH
router.patch(
  "/:id",
  AirplaneMiddleware.validateId,
  AirplaneMiddleware.validateUpdateRequest,
  AirplaneController.updateAirplane
);

module.exports = router;
