const CRUDRepository = require('./crud-repository');
const { Airplane } = require('../models')

class AirplaneRepository extends CRUDRepository {
    constructor() {
        super(Airplane)
    }
}

module.exports = AirplaneRepository