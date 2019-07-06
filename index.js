let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  startDate() {
    this.startDate
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let horizontal = Math.abs(this.avenueToInteger(this.beginningLocation.horizontal) - this.avenueToInteger(this.endingLocation.horizontal))

    let verical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    return horizontal + verical
  }

  estimatedTime(peakHour) {
    let travelRate = 3
    if (peakHour) { travelRate = 2 }
    return this.blocksTravelled() / travelRate
  }
}
