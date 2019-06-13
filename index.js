class Driver{
  constructor(name, start){
    this.name = name
    this.start = start
  }
  startDate(){
    return new Date(this.start)
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate().getFullYear()
  }
}

class Route{
  constructor(beginingLocation,endingLocation){
    this.beginingLocation = beginingLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled(){
    const beginingLocation = this.beginingLocation
    const endingLocation = this.endingLocation
    const eastWest = ['1st Avenue','2nd Avenue','3rd Avenue','Lexington Avenue','Park','Madison Avenue','5th Avenue'];
    let blocksTravelled = 0
    const horizontalTravelled = Math.abs(eastWest.indexOf(beginingLocation.horizontal) - eastWest.indexOf(endingLocation.horizontal) )
    const verticalTravelled = Math.abs(beginingLocation.vertical - endingLocation.vertical)
    return horizontalTravelled + verticalTravelled
  }
  estimatedTime(peak){
    let rate =3
    if (peak) {
      rate = 2
    }
    return this.blocksTravelled()/rate
  }
}
