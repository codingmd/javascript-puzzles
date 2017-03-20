// Store the current year in a variable.
var currentYear = 2017;

// Store their birth year in a variable.
var birthYear= 1997;

// Calculate their 2 possible ages based on the stored values.
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
// Output them to the screen like so: "They are either NN or NN", substituting the values.
document.write('They are either ' + age1 + ' or ' + age2);
document.write('<br>');
// use function call version
var ageCalc = {		
	current: 2017,
	birth: 1987,
	ageCalc: function () {
		var ageOne = this.current - this.birth;
		var ageTwo = ageOne - 1;
		document.write('They are either ' + ageOne + ' or ' + ageTwo);
	}
}

ageCalc.ageCalc();