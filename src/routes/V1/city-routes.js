const express = require('express');

const { CityController } = require('../../controllers');
const { CityMiddleWares } = require('../../middlewares')

const router = express.Router();

// api/v1/cities POST
router.post('/',
    CityMiddleWares.validateCreateRequest,
    CityController.createCity);

// api/v1/cities/:id DELETE
router.delete('/:id',
    CityController.destroyCity);

// api/v1/cities/:id UPDATE
router.patch('/:id',
    CityController.updateCity);

module.exports = router;