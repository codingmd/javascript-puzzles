
// plain code
var numChildren = 2;
var partnerName = 'Cindy';
var geoLocation = 'SD';
var jobTitle = 'software developer';

document.write('You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName +
		' with ' + numChildren + ' kids.');

// use of function call
var class1 = {
	numChildren: 2,
	partnerName: 'Cindy',
	geoLocation: 'San Diego',
	jobTitle: 'software developer',
	class1: function() {
	document.write('<br>You will be a ' + this.jobTitle + ' in ' + this.geoLocation + 
		', and married to ' + this.partnerName + ' with ' + 
		this.numChildren + ' kids.');
	}
};

class1.class1();
