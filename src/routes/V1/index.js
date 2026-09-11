const express = require('express')

const { InfoController } = require('../../controllers')

const airplaneRoutes = require('./airplane-routes');

const { AirplaneMiddlewares } = require('../../middlewares')

const router = express.Router();

router.use('/airplanes', AirplaneMiddlewares.validateCreateRequest, airplaneRoutes)

router.get('/info', InfoController.info);

module.exports = router;