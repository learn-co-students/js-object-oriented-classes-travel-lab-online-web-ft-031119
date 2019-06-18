class Driver {
  constructor (name, strJoinDate) {
    this.name = name;
    this.joinDate = new Date(strJoinDate);
  }
  startDate() {
    return this.strJoinDate;
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.joinDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  getEastWestBlocks(startingStreet, endingStreet) {
    const eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    let blocks = eastWest.indexOf(endingStreet) - eastWest.indexOf(startingStreet);
    return blocks > 0 ? blocks : (blocks * -1);
  }

  getNorthSouthBlocks(startingStreet, endingStreet) {
    let blocks = Number(endingStreet) - Number(startingStreet);
    return blocks >0 ? blocks : (blocks * -1);
  }

  blocksTravelled() {
    let horizontalBlocks = this.getEastWestBlocks(this.beginningLocation.horizontal, this.endingLocation.horizontal);
    let verticalBlocks = this.getNorthSouthBlocks(this.beginningLocation.vertical, this.endingLocation.vertical);
    return (horizontalBlocks + verticalBlocks);
  }

  estimatedTime(isPeakHour) {
    let blocks = this.blocksTravelled();
    if (isPeakHour) {
      return blocks / 2;
    } else {
      return blocks / 3;
    }

  }
}
