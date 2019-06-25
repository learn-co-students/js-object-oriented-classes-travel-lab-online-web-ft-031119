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
    this.name = name;
    this.startDate = new Date (startDate)
  }

  yearsExperienceFromBeginningOf(years){
    return this.endDate = years - this.startDate.getFullYear();
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue);
  }

  blocksTravelled() {
    let horizontalDistance =
      this.avenueToInteger(this.endingLocation.horizontal) -
      this.avenueToInteger(this.beginningLocation.horizontal);
    let verticalDistance =
      this.endingLocation.vertical - this.beginningLocation.vertical;
    return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
  }

  estimatedTime (peakTime) {
    if (peakTime) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }
}
