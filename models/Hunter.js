const Traveler  = require("./Traveler");

class Hunter extends Traveler {

    constructor(name) {
        super(name)
        this._food = 2
    }

    hunt() {
        this.food += 5
    }

    eat() {
        if (this.food < 2) {
            this.food = 0
            this.isHealthy = false
        }
        if (this.food >= 2) {
            this.food -= 2
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        if(this.food>=numOfFoodUnits){
            traveler.food+=numOfFoodUnits
            this.food -= numOfFoodUnits
        }
    }
}

module.exports = Hunter;