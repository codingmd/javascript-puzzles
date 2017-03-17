// Store the current year in a variable.
var currentYear = 2017;

// Store their birth year in a variable.
var birthYear= 1980;

// Calculate their 2 possible ages based on the stored values.
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
// Output them to the screen like so: "They are either NN or NN", substituting the values.
document.write('They are either ' + age1 + ' or ' + age2);

// use function call version
var ageCalc = {		
	currentYear: 2017,
	birthYear: 1980,
	age1: currentYear - birthYear,
	age2: age1 - 1,
	ageCalc: function () {
		document.write('They are either ' + this.age1 + ' or ' + this.age2);
	}
}

ageCalc.ageCalc();