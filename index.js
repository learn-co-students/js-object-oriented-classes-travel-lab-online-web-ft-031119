let eastWest= ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
	constructor(name, joiningDay) {
		this.name = name;
		this.joiningDay = joiningDay;
	}

	startDate(){
		let startDate = new Date(this.joiningDay);
		return startDate;
	}

	yearsExperienceFromBeginningOf(currentYear) {
		let year = new Date(this.joiningDay).getFullYear();
		 return  currentYear - year ; 
	}
}


class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	avenueToNum(avenue){
		return eastWest.indexOf(avenue);
	}
	blocksTravelled(){
    	let horizontalDistance = this.avenueToNum(this.endingLocation.horizontal) - this.avenueToNum(this.beginningLocation.horizontal)
    	let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    	return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  	}

  	estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    }
    else{
      return this.blocksTravelled()/3
    }

  }
}