// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune (numChildren, partnerName, geoLocal, jobTitle) {
	document.write('You will be a ' + jobTitle + ' in ' + geoLocal + ', and married to ' +
		partnerName + ' with ' + numChildren + ' kids.<br>');
}

tellFortune(3,'Cindy','London','designer');
tellFortune(4,'Cindy','Canada','engineer');
tellFortune(5,'Cindy','London','playwright');
