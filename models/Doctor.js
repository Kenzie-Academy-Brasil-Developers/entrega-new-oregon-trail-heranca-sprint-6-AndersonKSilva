const Traveler  = require("./Traveler");

class Doctor extends Traveler {

    constructor(name) {
        super(name)
    }
    heal(traveler) {
        traveler.isHealthy = true
    }
}

module.exports = Doctor;