const express = require('express');

const { AirplanceController } = require('../../controllers')
const { AirplaneMiddlewares } = require('../../middlewares')

const router = express.Router();

// api/v1/airplanes POST
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplanceController.createAirplane);

// api/v1/airplanes POST
router.get('/', AirplanceController.getAirplanes);

module.exports = router;