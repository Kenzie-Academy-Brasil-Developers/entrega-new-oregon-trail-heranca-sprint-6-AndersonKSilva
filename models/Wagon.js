class Wagon {
    constructor(capacity) {
        this._capacity = capacity
        this._passengers = []
    }
    get capacity() {return this._capacity}
    set capacity(value) {this._capacity = value}
    get passengers() {return this._passengers}
    set passengers(arraySeats) {this._passengers = arraySeats}

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(travelerName) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(travelerName)
        }
    }

    shouldQuarantine() {
        let sicker = false
        this.passengers.forEach((elm) => {
            if (elm.isHealthy === "false" || !elm.isHealthy) {
                sicker = true
            }
        })
        return sicker
    }

    totalFood () {
        return this.passengers.reduce((acm, current) => {
            return acm + current.food
        }, 0)
    }

}

module.exports = Wagon;