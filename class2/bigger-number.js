// Write a function that compares two numbers and returns the larger one. 
// Be sure to try it out with some different numbers. 
// Bonus: add error messages if the numbers are equal or cannot be compared.

function biggerNumber (num1, num2) {
	document.write('(' + num1 + ',' + num2 + '): ');
	if (num1 < num2) {
		document.write(num2 + '<br>');
	}
	else if (num1 > num2) {
		document.write(num1 + '<br>');
	}
	else if (num1 === num2) {
		document.write(num1 + ' is equal to ' + num2 + '<br>');
	}
	else {
		document.write('(' + typeof(num1) + ',' + typeof(num2) + ') Cannot be compared!<br>')
	}
}

biggerNumber(5,10);
biggerNumber(10,5);
biggerNumber(-50,0);
biggerNumber(-100,-50);
biggerNumber(0,0);
biggerNumber(0,'0');
biggerNumber('tuna',1);