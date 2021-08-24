class Traveler {
    
    constructor(name) {
        this._name = name
        this._food = 1
        this._isHealthy = true
    }

    get name() {return this._name}
    set name(name) {this._name = name}
    get food() {return Number(this._food)}
    set food(value) {this._food = Number(value)}
    get isHealthy() {return this._isHealthy}
    set isHealthy(isHealthy) {this._isHealthy = isHealthy}

    hunt(){
        this.food += 2
    }
    eat(){
        if (this.food === 0) {
            this.isHealthy = false
        }else {
            this.food--
        }
    }
}

module.exports = Traveler;