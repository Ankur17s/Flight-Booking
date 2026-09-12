const express = require('express');

const { AirplanceController } = require('../../controllers')
const { AirplaneMiddlewares } = require('../../middlewares')

const router = express.Router();

// api/v1/airplanes POST
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplanceController.createAirplane);

// api/v1/airplanes GET
router.get('/', AirplanceController.getAirplanes);

// api/v1/airplanes/:id GET
router.get('/:id', AirplanceController.getAirplane);

// api/v1/airplanes/:id DELETE
router.delete('/:id', AirplanceController.destroyAirplane);

module.exports = router;