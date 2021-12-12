const airportCapacity = 5

class Airport {

  constructor(maximumCapacity = airportCapacity) {
    this.maximumCapacity = maximumCapacity;
    this.planeCount = 0;
  }

  airportManagement() {
    return `Planes at the airport: ${this.planeCount}`
  }

  isFlying() {
    return this.flyingStatus
  }

  takeOff() {
    if (this.planeCount === 0) {
      this.flyingStatus = false
      return 'There are no planes to take off.'
    } else {
      this.flyingStatus = true
      this.planeCount -= 1
      return 'Plane has left the airport.'
    }
  }

  land() {
    if (this.planeCount < this.maximumCapacity) {
      this.flyingStatus = false
      this.planeCount += 1
      return 'Land the plane at the airport.'
    } else {
      return 'The plane cannot land. Airport is at capacity.';
    }
  }
}